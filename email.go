// Steve Phillips / elimisteve
// 2018.04.23

package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"
	"time"

	log "github.com/Sirupsen/logrus"
)

const (
	PURSUEMAIL_BASE_URL = "http://localhost:9080"

	TIME_FMT_POSTGREST = "2006-01-02"
)

var (
	EMAIL_DAILY_DIGEST_PERIOD = 24 * time.Hour
	UTC, _                    = time.LoadLocation("UTC")

	// map[username]*User
	userMap = map[string]*User{}

	// map[id]*Pursuance
	pursuanceMap = map[int]*Pursuance{}
)

func NewEmailer() {
	go func() {
		now := Now()
		tomorrow7amUTC := time.Date(now.Year(), now.Month(), now.Day()+1,
			7, 0, 0, 0, UTC)
		dur := tomorrow7amUTC.Sub(now)
		if dur > 24*time.Hour {
			dur -= 24 * time.Hour
		}
		log.Debugf("Sleeping %v before sending daily digest...", dur)
		time.Sleep(dur)

		tick := time.Tick(EMAIL_DAILY_DIGEST_PERIOD)
		for {
			setUserMap()

			var usernames []string
			for username := range userMap {
				usernames = append(usernames, username)
			}

			// Fetch tasks due in 14 days or less (or are past due)
			// that are assigned to users who have provided their
			// email address (that PursueMail is storing, and that we
			// have a UUID that represents said email address), that
			// aren't done, ordered by username of assignee then due
			// date.
			tasks := []*Task{}
			in14Days := Now().Add(14 * 24 * time.Hour).Format(TIME_FMT_POSTGREST)
			err := pgGetInto("/tasks?assigned_to=in.("+strings.Join(usernames, ",")+
				")&due_date=lte."+in14Days+
				"&status=not.eq.Done"+
				"&order=assigned_to.asc,due_date.asc,pursuance_id.asc",
				&tasks)
			if err != nil {
				log.Errorf("Error from pgGetInto(/tasks) -- %v", err)
				<-tick
				continue
			}

			updatePursuanceMap()

			errs := EmailDailyDigest(tasks)
			for _, err := range errs {
				if err != nil {
					log.Errorf("Error from EmailDailyDigest: %v", err)
				}
			}
			<-tick
		}
	}()
}

func pgGetInto(urlPath string, obj interface{}) error {
	log.Debugf("pgGetInto(%s)\n", urlPath)
	resp, err := http.Get(POSTGREST_BASE_URL + urlPath)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	if resp.StatusCode == http.StatusNoContent {
		return nil
	}

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return fmt.Errorf("pgGetInto(%s): Error reading resp.Body: %v",
			urlPath, err)
	}
	err = json.Unmarshal(body, obj)
	if err != nil {
		return fmt.Errorf("pgGetInto(%s): Error unmarshaling: %v", urlPath, err)
	}
	return nil
}

func Now() time.Time {
	return time.Now().UTC().Round(time.Second)
}

func setUserMap() {
	users := []*User{}
	// Users with email addresses
	err := pgGetInto("/users?email_id=not.is.null&select=username,email_id", &users)
	if err != nil {
		log.Infof("Error getting users: %v", err)
		return
	}

	// Clear
	userMap = map[string]*User{}

	// TODO(elimisteve): Truly ensure thread safety
	for i := 0; i < len(users); i++ {
		userMap[users[i].Username] = users[i]
		log.Debugf("setUserMap: just set userMap[%s] = %#v\n", users[i].Username,
			users[i])
	}
}

func updatePursuanceMap() {
	// Pursuances (to look up name by id)
	pursuances := []*Pursuance{}
	err := pgGetInto("/pursuances?select=id,name", &pursuances)
	if err != nil {
		log.Infof("Error getting pursuances: %v", err)
		return
	}

	// TODO(elimisteve): Truly ensure thread safety
	for i := 0; i < len(pursuances); i++ {
		pursuanceMap[pursuances[i].ID] = pursuances[i]
	}
}

func EmailDailyDigest(tasks []*Task) []error {
	errch := make(chan error)
	var i, distinctUsers int

	for i < len(tasks) {
		username := tasks[i].AssignedTo
		var tasksForThisUser []*Task
		for ; i < len(tasks) && tasks[i].AssignedTo == username; i++ {
			tasksForThisUser = append(tasksForThisUser, tasks[i])
		}

		distinctUsers++

		go func(ts []*Task) {
			log.Debugf("Sending daily digest to %v...", username)
			errch <- EmailDailyDigestToUser(ts, username)
		}(tasksForThisUser)
	}

	var errs []error
	for i := 0; i < distinctUsers; i++ {
		if err := <-errch; err != nil {
			errs = append(errs, err)
		}
	}
	return errs
}

func EmailDailyDigestToUser(tasks []*Task, username string) error {
	ptrEmailID, err := userEmailIdFromUsername(username)
	if err != nil {
		return err
	}

	var emailID string
	if ptrEmailID != nil {
		emailID = *ptrEmailID
	} else {
		return fmt.Errorf("User's emailID is null!")
	}

	for _, task := range tasks {
		// TODO: Shouldn't necessarily assume this pursuance exists... maybe
		task.PursuanceName = pursuanceMap[task.PursuanceID].Name
		task.DiscussURL = fmt.Sprintf("%s/pursuance/%d/discuss/task/%s",
			THIS_DOMAIN_BASE_URL, task.PursuanceID, task.Gid)
		task.DueDateFmt = task.DueDate.Format(TIME_FMT_POSTGREST)
	}

	var rendered bytes.Buffer

	// Render template based on tmplDailyDigest, userMap, and pursuanceMap
	err = tmplDailyDigest.Execute(&rendered, map[string]interface{}{
		"Tasks": tasks,
	})
	if err != nil {
		return err
	}

	jsonData, _ := json.Marshal(map[string]interface{}{
		"email_data": map[string]string{
			"from":    "team@pursuanceproject.org",
			"subject": fmt.Sprintf("Pursuance Daily Digest (%s)", Now().Format(TIME_FMT_POSTGREST)),
			"body":    string(rendered.Bytes()),
		},
	})

	url := fmt.Sprintf("%v/api/v1/email/%v/send", PURSUEMAIL_BASE_URL, emailID)
	resp, err := http.Post(url, "application/json; charset=UTF-8",
		bytes.NewReader(jsonData))
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	if resp.StatusCode == http.StatusNoContent {
		return nil
	}

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return fmt.Errorf("After POST to `%s` -- error reading resp.Body: %v", url, err)
	}
	log.Debugf("Response from PursueMail after emailing user '%s' (with email_id '%s'): `%s`",
		username, emailID, body)
	return nil
}

func userEmailIdFromUsername(username string) (userEmailID *string, err error) {
	user := userMap[username]
	if user == nil {
		return nil, fmt.Errorf("Error looking up username '%v' in userMap!",
			username)
	}
	return user.EmailID, nil
}
