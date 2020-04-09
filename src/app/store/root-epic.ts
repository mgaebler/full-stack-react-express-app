import { combineEpics } from 'redux-observable';

import * as tasks from '../modules/tasks/epics';

export default combineEpics(...Object.values(tasks));
