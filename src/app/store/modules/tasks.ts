import { action, createAction } from 'typesafe-actions';
import { Task } from 'domain/Task';
import cuid from 'cuid';

export const create = (task: Task) =>
  action('tasks/CREATE', { ...task, id: cuid() });

export const requestTaskCreation = (groupID: string) =>
  action('task/REQUEST_TASK_CREATION', { groupID });
