import moment from 'moment';

export const formatDate = (rfc3339, displayFormat="YYYY-MM-DD") => {
  return moment(rfc3339).format(displayFormat);
}

export let URL_PREFIX = document.origin + '/postgrest';

const defaultHeaders = {
  'Content-Type': 'application/json; charset=utf-8'
}

const createHeaders = (additionalHeaders) => {
  const headers = {}
  Object.assign(headers, defaultHeaders);
  Object.assign(headers, additionalHeaders);
  return headers;
}

export const postJSON = (pathSuffix, payload, additionalHeaders = {}) => {
  return fetch(URL_PREFIX + pathSuffix, {
    method: 'POST',
    headers: createHeaders(additionalHeaders),
    body: JSON.stringify(payload)
  })
    .then((resp) => {
      return resp.json();
    })
}

export const getJSON = (pathSuffix, additionalHeaders = {}) => {
  return fetch(URL_PREFIX + pathSuffix, {
    method: 'GET',
    headers: createHeaders(additionalHeaders),
  })
    .then((resp) => {
      return resp.json();
    })
}

export const deleteJSON = (pathSuffix, additionalHeaders = {}) => {
  return fetch(URL_PREFIX + pathSuffix, {
    method: 'DELETE',
    headers: createHeaders(additionalHeaders),
  })
    .then((resp) => {
      return resp.ok;
    })
}
