import { createReducer, getType } from 'typesafe-actions';

import { defaultState } from 'server/defaultState';
import { fetchTasks, createNewTask } from './actions';
import { RootState, RootAction } from 'app/store/store';
import { Task } from 'domain/Task';

const initialState = defaultState.tasks;

export const reducer = createReducer<Task[], RootAction>(initialState)
  .handleAction(fetchTasks.success, (state, action) => [
    ...state,
    ...action.payload,
  ])
  .handleAction(createNewTask.success, (state, action) => [
    ...state,
    action.payload,
  ]);

// export const reducer = createReducer(initialState, {
//   'tasks/CREATE': (state, action) => [...state, action.payload],
//   [getType(fetchTasks.success)]: (state, action) => [...state, action.payload],
// });
