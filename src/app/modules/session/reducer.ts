import { createReducer } from 'typesafe-actions';
import { defaultState } from 'server/defaultState';

export const reducer = createReducer(defaultState.session);
