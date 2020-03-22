import { action, createAction, createReducer } from 'typesafe-actions';
import { Task } from 'domain/Task';
import cuid from 'cuid';
import { defaultState } from 'server/defaultState';

const initialState = defaultState.tasks;

// export const createTask = createAction(
//   'tasks/CREATE',
//   (action) => (task: Task) => action({ ...task, id: cuid() })
// );

export const createTask = (task: Task) =>
  action('tasks/CREATE', { ...task, id: cuid() });

export const requestTaskCreation = (groupID: string) =>
  action('task/REQUEST_TASK_CREATION', { groupID });

export const reducer = createReducer(initialState, {
  'tasks/CREATE': (state, action) => [...state, action.payload]
  // 'tasks/REQUEST_TASK_CREATION': (state, action) => state
});
// .handleAction(createTask, (state:, action) => state)
// .handleAction(requestTaskCreation, (state, action) => state);
