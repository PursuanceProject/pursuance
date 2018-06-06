import { combineReducers } from 'redux';
import taskForm from './taskFormReducer';
import users from './usersReducer';
import pursuances from './pursuancesReducer';
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
import hypothesis from './hypothesisModalReducer';

const rootReducer = combineReducers({
  notifications: notificationsReducer,
  user: userReducer,
  taskForm,
  users,
  pursuances,
  publicPursuances,
  currentPursuanceId,
  tasks,
  showSettingsInfoModal,
  createPursuance,
  autoComplete,
  showSuccessToast,
  rightPanel,
  hypothesis,
});

export default rootReducer;
