import { getUsersReq } from '../api/users';
import { getPursuancesReq } from '../api/pursuances';

export const updateFormField = (formId, fieldId, value) =>
  ({ type: 'TASK_FIELD_UPDATE', formId, fieldId, value })

export const getUsers = () =>
  ({ type: 'GET_USERS', payload: getUsersReq() });

export const getPursuances = () =>
  ({ type: 'GET_PURSUANCES', payload: getPursuancesReq() });

export const startSuggestions = (value, filterSuggestion, list, formId) =>
  ({ type: 'START_SUGGESTIONS', suggestions: filterSuggestion(value, list), formId });

export const showUsers = (users, suggestionForm) =>
  ({ type: 'SHOW_USERS', users, suggestionForm })

export const stopSuggestions = () =>
  ({ type: 'STOP_SUGGESTIONS' })

export const addSuggestion = (username) =>
  ({ type: 'ADD_SUGGESTION', username })

export const upSuggestion = () =>
  ({ type: 'UP_SUGGESTION' })

export const downSuggestion = () =>
  ({ type: 'DOWN_SUGGESTION' })
