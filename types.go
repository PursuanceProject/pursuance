// Steve Phillips / elimisteve
// 2018.04.24

package main

import "time"

type Pursuance struct {
	ID          int       `json:"id"`
	MinilockID  *string   `json:"minilock_id"`
	Name        string    `json:"name"`
	NameEnc     string    `json:"name_enc"`
	Mission     string    `json:"mission"`
	MissionEnc  string    `json:"mission_enc"`
	IsEncrypted bool      `json:"is_encrypted"`
	Created     time.Time `json:"created"`
}

type User struct {
	Username   string    `json:"username"`
	MinilockID *string   `json:"minilock_id"`
	Created    time.Time `json:"created"`
	EmailID    *string   `json:"email_id"`
}

type Task struct {
	Gid                   string     `json:"gid"`
	PursuanceID           int        `json:"pursuance_id"`
	ID                    int        `json:"id"`
	Title                 string     `json:"title"`
	TitleEnc              string     `json:"title_enc"`
	Deliverables          string     `json:"deliverables"`
	DeliverablesEnc       string     `json:"deliverables_enc"`
	AssignedTo            string     `json:"assigned_to"`
	AssignedToPursuanceID int        `json:"assigned_to_pursuance_id"`
	DueDate               *time.Time `json:"due_date"`
	Created               time.Time  `json:"created"`
	ParentTaskGid         string     `json:"parent_task_gid"`
	Status                string     `json:"status"`

	// Used in email templates
	PursuanceName string `json:"-"`
	DiscussURL    string `json:"-"`
	DueDateFmt    string `json:"-"`
}
