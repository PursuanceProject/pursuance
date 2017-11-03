import { combineReducers } from 'redux';
import taskForm from './taskFormReducer';
import users from './usersReducer';
import pursuances from './pursuancesReducer';
import currentPursuanceId from './currentPursuanceId';
import tasks from './tasksReducer';
import notificationsReducer from './notificationsReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  notifications: notificationsReducer,
  auth: authReducer,
  taskForm,
  users,
  pursuances,
  currentPursuanceId,
  tasks
});


export default rootReducer;
