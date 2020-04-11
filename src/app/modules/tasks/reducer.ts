import { createReducer, getType, createAction } from 'typesafe-actions';

import { defaultState } from 'server/defaultState';
import {
  fetchTasks,
  createNewTask,
  setTaskCompletion,
  setTaskGroup,
  setTaskName,
} from './actions';
import { RootState, RootAction } from 'app/store/store';
import { Task } from 'domain/Task';

const initialState = defaultState.tasks;

export const reducer = createReducer<Task[], RootAction>([])
  .handleAction(fetchTasks.success, (state, action) => [
    ...state,
    ...action.payload,
  ])
  .handleAction(createNewTask.success, (state, action) => [
    ...state,
    action.payload,
  ]);
// .handleAction(setTaskCompletion, (state, action) =>
//   state.map((task: Task) =>
//     task.id === action.payload.id
//       ? { ...task, isComplete: action.payload.isComplete }
//       : task
//   )
// )
// .handleAction(setTaskGroup, (state, action) =>
//   state.map((task: Task) =>
//     task.id === action.payload.id
//       ? { ...task, group: action.payload.groupID }
//       : task
//   )
// )
// .handleAction(setTaskName, (state, action) =>
//   state.map((task: Task) =>
//     task.id === action.payload.id
//       ? { ...task, name: action.payload.name }
//       : task
//   )
// );

// export const reducer = createReducer(initialState, {
//   'tasks/CREATE': (state, action) => [...state, action.payload],
//   [getType(fetchTasks.success)]: (state, action) => [...state, action.payload],
// });
