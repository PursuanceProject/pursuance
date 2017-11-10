// Steve Phillips / elimisteve
// 2017.11.09

package main

import (
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/cryptag/minishare/miniware"
)

func TestLogin(t *testing.T) {
	r := NewRouter(miniware.NewMapper())

	testURL(t, "GET", "/api/login", nil, r,
		http.StatusBadRequest, `{"error":"Error: invalid miniLock ID"}`)

	for _, url := range []string{"/dashboard", "/pursuance", "/123"} {
		testURL(t, "GET", url, nil, r, http.StatusOK, "")
	}

	testURL(t, "GET", "/somethingelse/please404", nil, r, http.StatusNotFound, "")
}

func testURL(t *testing.T, httpMethod string, url string, headers http.Header, handler http.Handler, wantedStatusCode int, wantedResponse string) {
	t.Logf("Testing '%v' request to '%v'\n", httpMethod, url)

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
		if status := rec.Code; status != wantedStatusCode {
			t.Errorf("handler returned wrong status code: got %v, wanted %v",
				status, wantedStatusCode)
		}
	}

	if wantedResponse != "" {
		if rec.Body.String() != wantedResponse {
			t.Errorf("handler returned unexpected body: got %v, wanted %v",
				rec.Body.String(), wantedResponse)
		}
	}
}
