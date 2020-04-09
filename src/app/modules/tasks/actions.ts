import { action, createAction, createAsyncAction } from 'typesafe-actions';
import { Task } from 'domain/Task';
import cuid from 'cuid';

// export const createTask = createAction(
//   'tasks/CREATE',
//   (action) => (task: Task) => action({ ...task, id: cuid() })
// );

// export const createTask = (task: Task) =>
//   action('tasks/CREATE', { ...task, id: cuid() });

// export const requestTaskCreation = (groupID: string) =>
//   action('task/REQUEST_TASK_CREATION', { groupID });

// .handleAction(createTask, (state:, action) => state)
// .handleAction(requestTaskCreation, (state, action) => state);

export const fetchTasks = createAsyncAction(
  'tasks/FETCH_TASKS_REQUEST',
  'tasks/FETCH_TASKS_SUCCESS',
  'tasks/FETCH_TASKS_FAILURE',
  'tasks/FETCH_TASKS_CANCEL'
)<void, Task[], Error, string>();

export const createNewTask = createAsyncAction(
  'tasks/CREATE_NEW_TASK_REQUEST',
  'tasks/CREATE_NEW_TASK_SUCCESS',
  'tasks/CREATE_NEW_TASK_FAILURE',
  'tasks/CREATE_NEW_TASK_CANCEL'
)<Task, Task, Error, string>();
