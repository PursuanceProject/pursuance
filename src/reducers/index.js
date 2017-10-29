import { combineReducers } from 'redux';
import taskForm from './taskFormReducer';
import users from './usersReducer';
import pursuances from './pursuancesReducer';
import currentPursuanceId from './currentPursuanceId';
import tasks from './tasksReducer';

const rootReducer = combineReducers({
  taskForm,
  users,
  pursuances,
  currentPursuanceId,
  tasks
});


export default rootReducer;
