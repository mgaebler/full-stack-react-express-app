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
import { fetchTasks, createNewTask } from './actions';
import { RootEpic } from 'app/store/store';

export const fetchTasksEpic: RootEpic = (action$, _state$, { api }) =>
  action$.pipe(
    filter(isActionOf(fetchTasks.request)),
    switchMap(() =>
      from(api.tasks.loadSnapshot()).pipe(
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
