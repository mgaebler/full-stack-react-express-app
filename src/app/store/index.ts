import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { defaultState } from '../../server/defaultState';

import { combineEpics, createEpicMiddleware } from 'redux-observable';

export type DefaultState = typeof defaultState;

function groups(state = defaultState.groups, action) {
  return state;
}

const rootReducer = combineReducers({
  tasks,
  groups
});

const rootEpic = combineEpics({
  // taskEpic
});

const epicMiddleware = createEpicMiddleware();

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

  // epicMiddleware.run(rootEpic);

  return store;
})();
