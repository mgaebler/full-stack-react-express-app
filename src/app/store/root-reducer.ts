import { reducer as tasks } from '../modules/tasks/reducer';
import { reducer as groups } from '../modules/groups/groups';
import { reducer as users } from '../modules/users';
import { reducer as comments } from '../modules/comments';
import { reducer as session } from '../modules/session/reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  session,
  tasks,
  groups,
  users,
  comments,
});
