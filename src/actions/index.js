import { getUsersReq } from '../api/users';
import {
  getPursuancesReq,
  getPublicPursuancesReq,
  postPursuanceReq
} from '../api/pursuances';
import { postTaskReq, getTasksReq, patchTaskReq, deleteTaskReq } from '../api/tasks';

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

export const setTaskFormParentGid = (formId, newParentGid, oldParentGid) => ({
  type: 'TASK_FORM_SET_PARENT_GID',
  formId,
  newParentGid,
  oldParentGid
});

export const getUsers = () => ({ type: 'GET_USERS', payload: getUsersReq() });

export const getPursuancesByIds = pursuanceIds => ({
  type: 'GET_PURSUANCES_BY_IDS',
  payload: getPursuancesReq(pursuanceIds)
});

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

export const deleteTask = task => ({
  type: 'DELETE_TASK',
  payload: deleteTaskReq(task)
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

export const addSuggestion = (suggestion, suggestionForm) => ({
  type: 'ADD_SUGGESTION',
  suggestion,
  suggestionForm
});

export const upSuggestion = () => ({ type: 'UP_SUGGESTION' });

export const downSuggestion = () => ({ type: 'DOWN_SUGGESTION' });

export const setCurrentPursuance = currentPursuanceId => ({
  type: 'SET_CURRENT_PURSUANCE',
  currentPursuanceId
});

export const unsetCurrentPursuance = () => ({
  type: 'UNSET_CURRENT_PURSUANCE'
});

export const addPostedRootTaskToHierarchy = task => ({
  type: 'ADD_POSTED_ROOT_TASK',
  task
});

export const addPostedSubTaskToHierarchy = task => ({
  type: 'ADD_POSTED_SUB_TASK',
  task
});

export const addTaskFormToHierarchy = (parentTaskGid, taskFormId) => ({
  type: 'TASK_FORM_ADD_TO_HIERARCHY',
  parentTaskGid,
  taskFormId
});

export const removeTaskFormFromHierarchy = (parentTaskGid, taskFormId) => ({
  type: 'TASK_FORM_REMOVE_FROM_HIERARCHY',
  parentTaskGid,
  taskFormId
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

export const toggleRoleInfoModal = () => ({
  type: 'TOGGLE_ROLE_INFO_MODAL'
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

export const patchTask = task => ({
  type: 'PATCH_TASK',
  payload: patchTaskReq(task)
});

export const archiveTask = task => ({
  type: 'TASK_ARCHIVE',
  payload: patchTaskReq({ ...task, is_archived: true })
});

export const setTaskAssignee = task => ({
  type: 'TASK_SET_ASSIGNEE',
  payload: patchTaskReq(task)
});

export const removeSuccessToast = () => ({
  type: 'REMOVE_SUCCESS_TOAST'
});

export const rpShowTaskDetails = ({ taskGid, show = true }) => ({
  type: 'RIGHT_PANEL_SHOW_TASK_DETAILS',
  taskGid,
  show
});

export const rpShowTaskList = ({ show = true }) => ({
  type: 'RIGHT_PANEL_TOGGLE_SHOW_TASK_LIST',
  show: show
});

export const rpUpdateTaskListFilter = taskListFilter => ({
  type: 'RIGHT_PANEL_TASK_LIST_FILTER_UPDATE',
  taskListFilter
});

export const toggleRightPanel = () => ({
  type: 'RIGHT_PANEL_TOGGLE'
});

export const rpShowTaskDetailsOrCollapse = ({ taskGid }) => ({
  type: 'RIGHT_PANEL_SHOW_TASK_DETAILS_OR_COLLAPSE',
  taskGid
});

export const userLoginSuccess = ({ username }) => ({
  type: 'USER_LOGIN_SUCCESS',
  username
});

export const userLogoutSuccess = () => ({
  type: 'USER_LOGOUT_SUCCESS'
});

export const getInvites = ({ pursuanceId }) => ({
  type: 'GET_INVITES',
  pursuanceId
});
