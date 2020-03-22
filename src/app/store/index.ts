import { createStore, compose, combineReducers, applyMiddleware } from 'redux';

import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { reducer as tasks } from './modules/tasks';
import { reducer as groups } from './modules/groups';
import { reducer as users } from './modules/users';
import { reducer as comments } from './modules/comments';

const rootReducer = combineReducers({
  tasks,
  groups,
  users,
  comments
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
