import { combineReducers } from 'redux';
import taskForm from './taskFormReducer';
import users from './usersReducer';
import pursuances from './pursuancesReducer';
import currentPursuanceId from './currentPursuanceIdReducer';
import tasks from './tasksReducer';
import notificationsReducer from './notificationsReducer';
import userReducer from './userReducer';
import showSettingsInfoModal from './settingsInfoReducer';
import createPursuance from './createPursuanceReducer';
import autoComplete from './autoCompleteReducer';

const rootReducer = combineReducers({
  notifications: notificationsReducer,
  user: userReducer,
  taskForm,
  users,
  pursuances,
  currentPursuanceId,
  tasks,
  showSettingsInfoModal,
  createPursuance,
  autoComplete
});

export default rootReducer;
