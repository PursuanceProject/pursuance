import { getUsersReq } from '../api/users';
import { getPursuancesReq, getPublicPursuancesReq, postPursuanceReq } from '../api/pursuances';
import { postTaskReq, getTasksReq } from '../api/tasks';

export const updateFormField = (formId, fieldId, value) => ({
  type: 'TASK_FIELD_UPDATE',
  formId,
  fieldId,
  value
});

export const clearTaskFormFields = formId => ({
  type: 'TASK_FORM_CLEAR_FIELDS',
  formId
});

export const setTaskFormParentGid = (formId, newParentGid) => ({
  type: 'TASK_FORM_SET_PARENT_GID',
  formId,
  newParentGid
});

export const getUsers = () => ({ type: 'GET_USERS', payload: getUsersReq() });

export const getPursuances = () => ({
  type: 'GET_PURSUANCES',
  payload: getPursuancesReq()
});

export const getPublicPursuances = () => ({
  type: 'GET_PUBLIC_PURSUANCES',
  payload: getPublicPursuancesReq()
});

export const getTasks = pursuanceId => ({
  type: 'GET_TASKS',
  payload: getTasksReq(pursuanceId)
});

export const postTask = task => ({
  type: 'POST_TASK',
  payload: postTaskReq(task)
});

export const startSuggestions = (value, filterSuggestion, list, formId) => ({
  type: 'START_SUGGESTIONS',
  suggestions: filterSuggestion(value, list),
  formId
});

export const showUsers = (users, suggestionForm) => ({
  type: 'SHOW_USERS',
  users,
  suggestionForm
});

export const stopSuggestions = () => ({ type: 'STOP_SUGGESTIONS' });

export const addSuggestion = suggestion => ({
  type: 'ADD_SUGGESTION',
  suggestion
});

export const upSuggestion = () => ({ type: 'UP_SUGGESTION' });

export const downSuggestion = () => ({ type: 'DOWN_SUGGESTION' });

export const setCurrentPursuance = currentPursuanceId => ({
  type: 'SET_CURRENT_PURSUANCE',
  currentPursuanceId
});

export const addPostedRootTaskToHierarchy = task => ({
  type: 'ADD_POSTED_ROOT_TASK',
  task
});

export const addPostedSubTaskToHierarchy = task => ({
  type: 'ADD_POSTED_SUB_TASK',
  task
});

export const setMicroTaskNotification = ({ id, content, userAction }) => ({
  type: 'SET_NOTIFICATION',
  id,
  notificationType: 'MICRO_TASK',
  content,
  userAction
});

export const setAppreciationNotification = ({ id, content, userAction }) => ({
  type: 'SET_NOTIFICATION',
  id,
  notificationType: 'APPRECIATION',
  content,
  userAction
});

export const setMentionNotification = ({ id, content, userAction }) => ({
  type: 'SET_NOTIFICATION',
  id,
  notificationType: 'MENTION',
  content,
  userAction
});

export const setHelpWantedNotification = ({ id, content, userAction }) => ({
  type: 'SET_NOTIFICATION',
  id,
  notificationType: 'HELP_WANTED',
  content,
  userAction
});

export const setProgressNotification = ({ id, content, userAction }) => ({
  type: 'SET_NOTIFICATION',
  id,
  notificationType: 'PROGRESS',
  content,
  userAction
});

export const removeNotification = id => ({ type: 'REMOVE_NOTIFICATION', id });

export const addContributionPoints = amount => ({
  type: 'ADD_CONTRIBUTION_POINTS',
  amount
});

export const toggleSettingsInfoModal = () => ({
  type: 'TOGGLE_SETTINGS_INFO_MODAL'
});

export const updatePursuanceFormField = (fieldId, value) => ({
  type: 'UPDATE_CREATE_PURSUANCE_FORM',
  fieldId,
  value
});

export const postPursuance = pursuance => ({
  type: 'POST_PURSUANCE',
  payload: postPursuanceReq(pursuance)
});

export const clearPursuanceFormFields = () => ({
  type: 'PURSUANCE_FORM_CLEAR_FIELDS'
});
