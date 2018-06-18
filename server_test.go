// Steve Phillips / elimisteve
// 2017.11.09

package main

import (
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/cryptag/minishare/miniware"
	"github.com/stretchr/testify/assert"
)

var router = NewRouter(miniware.NewMapper())

func TestLogin(t *testing.T) {
	testURL(t, "GET", "/api/login", nil, router,
		http.StatusBadRequest, `{"error":"Error: invalid miniLock ID"}`)
}

func TestRouting(t *testing.T) {
	for _, url := range []string{"/dashboard", "/pursuance", "/123"} {
		testURL(t, "GET", url, nil, router, http.StatusOK, "")
	}
	testURL(t, "GET", "/somethingelse/should404", nil, router, http.StatusNotFound, "")
}

func testURL(t *testing.T, httpMethod string, url string, headers http.Header, handler http.Handler, wantedStatusCode int, wantedResponse string) {
	t.Logf("Testing '%v' request to '%v'", httpMethod, url)

	req, err := http.NewRequest(httpMethod, url, nil)
	if err != nil {
		t.Fatal(err)
	}

	if headers != nil {
		req.Header = headers
	}

	rec := httptest.NewRecorder()

	handler.ServeHTTP(rec, req)

	if wantedStatusCode != 0 {
		assert.Equal(t, wantedStatusCode, rec.Code)
	}

	if wantedResponse != "" {
		assert.Equal(t, wantedResponse, rec.Body.String())
	}
}
