import moment from 'moment';

export const formatDate = (rfc3339, displayFormat = 'YYYY-MM-DD') => {
  return moment(rfc3339).format(displayFormat);
};

export let URL_PREFIX = window.location.origin + '/postgrest';

export const postJSON = (pathSuffix, payload, additionalHeaders = {}) => {
  const headers = {
    'Content-Type': 'application/json; charset=utf-8'
  };
  Object.assign(headers, additionalHeaders);

  return fetch(URL_PREFIX + pathSuffix, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(payload)
  }).then(resp => {
    return resp.json();
  });
};

export const getJSON = (pathSuffix, additionalHeaders = {}) => {
  const headers = {
    'Content-Type': 'application/json; charset=utf-8'
  };
  Object.assign(headers, additionalHeaders);

  return fetch(URL_PREFIX + pathSuffix, {
    method: 'GET',
    headers: headers
  }).then(resp => {
    return resp.json();
  });
};
