import { action, createAction, createAsyncAction } from 'typesafe-actions';
import { Task } from 'domain/Task';
import cuid from 'cuid';

// export const createTask = (task: Task) =>
//   action('tasks/CREATE', { ...task, id: cuid() });

// export const requestTaskCreation = (groupID: string) =>
//   action('task/REQUEST_TASK_CREATION', { groupID });

export const setTaskCompletion = createAction(
  'tasks/SET_TASK_COMPLETION',
  (id: string, isComplete: boolean) => ({ id, isComplete })
)<{ id: string; isComplete: boolean }>();

export const setTaskName = createAction(
  'tasks/SET_TASK_NAME',
  (id: string, name: string) => ({ id, name })
)();

export const setTaskGroup = createAction(
  'tasks/SET_TASK_GROUP',
  (id: string, groupID: string) => ({
    id,
    groupID,
  })
)();

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

export const updateTask = createAsyncAction(
  'tasks/UPDATE_TASK_REQUEST',
  'tasks/UPDATE_TASK_SUCCESS',
  'tasks/UPDATE_TASK_FAILURE',
  'tasks/UPDATE_TASK_CANCEL'
)<Task, Task, Error, string>();
