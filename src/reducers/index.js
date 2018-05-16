import { combineReducers } from 'redux';
import taskForm from './taskFormReducer';
import users from './usersReducer';
import pursuances from './pursuancesReducer';
import publicOrder from './publicOrderReducer';
import publicPursuances from './publicPursuancesReducer';
import currentPursuanceId from './currentPursuanceIdReducer';
import tasks from './tasksReducer';
import notificationsReducer from './notificationsReducer';
import userReducer from './userReducer';
import showSettingsInfoModal from './settingsInfoReducer';
import createPursuance from './createPursuanceReducer';
import autoComplete from './autoCompleteReducer';
import showSuccessToast from './showSuccessToastReducer';
import rightPanel from './rightPanelReducer';

const rootReducer = combineReducers({
  notifications: notificationsReducer,
  user: userReducer,
  taskForm,
  users,
  pursuances,
  publicOrder,
  publicPursuances,
  currentPursuanceId,
  tasks,
  showSettingsInfoModal,
  createPursuance,
  autoComplete,
  showSuccessToast,
  rightPanel
});

export default rootReducer;
