import { isActionOf } from 'typesafe-actions';
import {
  filter,
  switchMap,
  catchError,
  takeUntil,
  map,
  mergeMap,
} from 'rxjs/operators';
import { from, of } from 'rxjs';
import { fetchTasks, createNewTask, updateTask } from './actions';
import { RootEpic } from 'app/store/store';

export const fetchTasksEpic: RootEpic = (action$, _state$, { api }) =>
  action$.pipe(
    filter(isActionOf(fetchTasks.request)),
    switchMap(() =>
      from(api.tasks.fetchAllTasks()).pipe(
        map(fetchTasks.success),
        catchError((message) => of(fetchTasks.failure(message))),
        takeUntil(action$.pipe(filter(isActionOf(fetchTasks.cancel))))
      )
    )
  );

export const createNewTaskEpic: RootEpic = (action$, _state$, { api }) =>
  action$.pipe(
    filter(isActionOf(createNewTask.request)),
    mergeMap((action) =>
      from(api.tasks.postNewTask(action.payload)).pipe(
        map(createNewTask.success),
        catchError((message) => of(createNewTask.failure(message))),
        takeUntil(action$.pipe(filter(isActionOf(createNewTask.cancel))))
      )
    )
  );

export const updateTaskEpic: RootEpic = (action$, _state$, { api }) =>
  action$.pipe(
    filter(isActionOf(updateTask.request)),
    mergeMap((action) =>
      from(api.tasks.postNewTask(action.payload)).pipe(
        map(updateTask.success),
        catchError((message) => of(updateTask.failure(message))),
        takeUntil(action$.pipe(filter(isActionOf(updateTask.cancel))))
      )
    )
  );
