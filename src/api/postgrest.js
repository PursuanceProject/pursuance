import moment from 'moment';

export const formatDate = (rfc3339, displayFormat="YYYY-MM-DD HH:mm:ss") => {
  return moment(rfc3339).format(displayFormat);
}


export let URL_PREFIX = document.origin + '/postgrest';

export const postJSON = (pathSuffix, payload, additionalHeaders = {}) => {
  const headers = {
    'Content-Type': 'application/json; charset=utf-8'
  }
  Object.assign(headers, additionalHeaders);

  return fetch(URL_PREFIX + pathSuffix, {
    method: 'POST',
    headers: headers
  })
    .then((resp) => {
      return resp.json();
    })
}

export const getJSON = (pathSuffix, additionalHeaders = {}) => {
  const headers = {
    'Content-Type': 'application/json; charset=utf-8'
  }
  Object.assign(headers, additionalHeaders);

  return fetch(URL_PREFIX + pathSuffix, {
    method: 'GET',
    headers: headers
  })
    .then((resp) => {
      return resp.json();
    })
}
