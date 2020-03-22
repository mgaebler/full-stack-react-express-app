import { defaultState } from 'server/defaultState';
import { createReducer } from 'typesafe-actions';

export const reducer = createReducer(defaultState.groups);
