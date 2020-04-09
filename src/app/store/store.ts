import { createStore, compose, applyMiddleware } from 'redux';

import { createEpicMiddleware, Epic } from 'redux-observable';
import { ActionType, StateType } from 'typesafe-actions';
import rootEpic from './root-epic';
import rootReducer from './root-reducer';
import rootAction from './root-action';
import services from '../services/services';

export type Services = typeof services;
export type RootAction = ActionType<typeof rootAction>;
export type RootEpic = Epic<RootAction, RootAction, RootState, Services>;
export type RootState = StateType<ReturnType<typeof rootReducer>>;

const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootState,
  Services
>({ dependencies: services });

// add middleware here
const middleware = [epicMiddleware];

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = (() => {
  const store = createStore(
    rootReducer,
    undefined,
    composeEnhancers(applyMiddleware(...middleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
})();
