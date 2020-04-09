import { reducer as tasks } from '../modules/tasks/reducer';
import { reducer as groups } from '../modules/groups/groups';
import { reducer as users } from '../modules/users';
import { reducer as comments } from '../modules/comments';
import { combineReducers } from 'redux';

export default combineReducers({
  tasks,
  groups,
  users,
  comments,
});
