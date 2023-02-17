import { combineReducers } from '@reduxjs/toolkit';

import { mainSlice } from './reducers/main-slice';

const { reducer } = mainSlice;

export const rootReducer = combineReducers({
  reducer
});
