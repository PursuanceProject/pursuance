import { combineReducers } from 'redux';
import taskForm from './taskFormReducer';
import users from './usersReducer';
import pursuances from './pursuancesReducer';

const rootReducer = combineReducers({
  taskForm,
  users,
  pursuances
});


export default rootReducer;
