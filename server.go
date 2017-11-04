package main

import (
	"crypto/tls"
	"fmt"
	"html/template"
	"net/http"
	"net/http/httputil"
	"net/url"
	"strings"
	"time"

	"github.com/cryptag/gosecure/canary"
	"github.com/cryptag/gosecure/content"
	"github.com/cryptag/gosecure/csp"
	"github.com/cryptag/gosecure/frame"
	"github.com/cryptag/gosecure/hsts"
	"github.com/cryptag/gosecure/referrer"
	"github.com/cryptag/gosecure/xss"
	"github.com/cryptag/minishare/miniware"

	log "github.com/Sirupsen/logrus"
	minilock "github.com/cathalgarvey/go-minilock"
	"github.com/cathalgarvey/go-minilock/taber"
	"github.com/gorilla/mux"
	"github.com/justinas/alice"
	uuid "github.com/nu7hatch/gouuid"
	"golang.org/x/crypto/acme/autocert"
)

const (
	MINILOCK_ID_KEY = "minilock_id"

	POSTGREST_BASE_URL = "http://localhost:3000"
)

var (
	templates = template.Must(template.ParseFiles("build/index.html"))
)

func NewRouter(m *miniware.Mapper) *mux.Router {
	r := mux.NewRouter()

	r.HandleFunc("/api/login", Login(m)).Methods("GET")

	postgrestAPI, _ := url.Parse(POSTGREST_BASE_URL + "/")
	r.PathPrefix("/postgrest").Handler(
		http.StripPrefix("/postgrest",
			httputil.NewSingleHostReverseProxy(postgrestAPI)))

	// Hack to make up for the fact that
	//   r.NotFoundHandler = http.HandlerFunc(GetIndex)
	// doesn't do anything, since the below
	//   r.PathPrefix("/").Handler(...)
	// call returns its own 404, ignoring the value of
	//   r.NotFoundHandler
	for i := 0; i < 10; i++ {
		r.PathPrefix("/" + fmt.Sprintf("%d", i)).HandlerFunc(GetIndex)
	}
	r.PathPrefix("/dashboard").HandlerFunc(GetIndex)
	r.PathPrefix("/pursuance").HandlerFunc(GetIndex)

	r.PathPrefix("/").Handler(http.FileServer(http.Dir("./build"))).Methods("GET")

	http.Handle("/", r)
	return r
}

func NewServer(m *miniware.Mapper, httpAddr string) *http.Server {
	r := NewRouter(m)

	return &http.Server{
		Addr:         httpAddr,
		ReadTimeout:  1000 * time.Second,
		WriteTimeout: 1000 * time.Second,
		IdleTimeout:  120 * time.Second,
		Handler:      r,
	}
}

func ProductionServer(srv *http.Server, httpsAddr string, domain string) {
	gotWarrant := false
	middleware := alice.New(canary.GetHandler(&gotWarrant),
		csp.GetHandler(domain), hsts.PreloadHandler, frame.DenyHandler,
		content.GetHandler, xss.GetHandler, referrer.NoHandler)

	srv.Handler = middleware.Then(srv.Handler)

	srv.Addr = httpsAddr
	srv.TLSConfig = getTLSConfig(domain)
}

func GetIndex(w http.ResponseWriter, req *http.Request) {
	_ = templates.ExecuteTemplate(w, "index.html", nil)
}

func Login(m *miniware.Mapper) func(w http.ResponseWriter, req *http.Request) {
	return http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
		mID, keypair, err := parseMinilockID(req)
		if err != nil {
			WriteErrorStatus(w, "Error: invalid miniLock ID",
				err, http.StatusBadRequest)
			return
		}

		log.Infof("Login: `%s` is trying to log in\n", mID)

		newUUID, err := uuid.NewV4()
		if err != nil {
			WriteError(w, "Error generating new auth token; sorry!", err)
			return
		}

		authToken := newUUID.String()

		err = m.SetMinilockID(authToken, mID)
		if err != nil {
			WriteError(w, "Error saving new auth token; sorry!", err)
			return
		}

		filename := "type:authtoken"
		contents := []byte(authToken)
		sender := randomServerKey
		recipient := keypair

		encAuthToken, err := minilock.EncryptFileContents(filename, contents,
			sender, recipient)
		if err != nil {
			WriteError(w, "Error encrypting auth token to you; sorry!", err)
			return
		}

		w.Write(encAuthToken)
	})
}

func parseMinilockID(req *http.Request) (string, *taber.Keys, error) {
	mID := req.Header.Get("X-Minilock-Id")

	// Validate miniLock ID by trying to generate public key from it
	keypair, err := taber.FromID(mID)
	if err != nil {
		return "", nil, fmt.Errorf("Error validating miniLock ID: %v", err)
	}

	return mID, keypair, nil
}

func redirectToHTTPS(httpAddr, httpsPort string) {
	srv := &http.Server{
		Addr:         httpAddr,
		ReadTimeout:  5 * time.Second,
		WriteTimeout: 5 * time.Second,
		Handler: http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
			w.Header().Set("Connection", "close")
			domain := strings.SplitN(req.Host, ":", 2)[0]
			url := "https://" + domain + ":" + httpsPort + req.URL.String()
			http.Redirect(w, req, url, http.StatusFound)
		}),
	}
	log.Infof("Listening on %v\n", httpAddr)
	log.Fatal(srv.ListenAndServe())
}

func getTLSConfig(domain string) *tls.Config {
	m := autocert.Manager{
		Prompt:     autocert.AcceptTOS,
		HostPolicy: autocert.HostWhitelist(domain),
		Cache:      autocert.DirCache("./" + domain),
	}

	return &tls.Config{
		PreferServerCipherSuites: true,
		CurvePreferences: []tls.CurveID{
			tls.CurveP256,
			tls.X25519,
		},
		MinVersion: tls.VersionTLS12,
		CipherSuites: []uint16{
			tls.TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,
			tls.TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,
			tls.TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,
			tls.TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,
			tls.TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,
			tls.TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,
		},
		GetCertificate: m.GetCertificate,
	}
}
