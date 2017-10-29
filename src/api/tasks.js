import * as postgrest from './postgrest';

export const postTaskReq = (task) => {
  return postgrest.postJSON('/tasks', task, {Prefer: 'return=representation'})
    .catch((err) => console.log('error posting task:', err))
}
