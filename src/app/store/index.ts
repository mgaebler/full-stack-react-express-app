import { createStore, compose } from 'redux';
import { defaultState } from '../../server/defaultState';

export type DefaultState = typeof defaultState;

function reducer(state = defaultState, action) {
  return state;
}

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, undefined, composeEnhancers());
