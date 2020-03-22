import { action, createAction } from 'typesafe-actions';
import { Task } from 'domain/Task';
import cuid from 'cuid';
import { defaultState } from 'server/defaultState';

export const createTask = (task: Task) => console.log('foo');
// action('tasks/CREATE', { ...task, id: cuid() });

export const requestTaskCreation = (groupID: string) =>
  action('task/REQUEST_TASK_CREATION', { groupID });

export function reducer(state = defaultState.tasks, action) {
  return state;
}
