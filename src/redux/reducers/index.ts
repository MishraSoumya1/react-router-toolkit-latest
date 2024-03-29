import { Reducer, combineReducers } from '@reduxjs/toolkit';
import { createRouterReducer } from '../../middlewares/react-router-redux';

import { history } from '../store';

export default function createReducer(
  injectedReducers: Record<string, Reducer> = {}
) {
  return combineReducers({
    ...injectedReducers,
    router: createRouterReducer(history),
  });
}
