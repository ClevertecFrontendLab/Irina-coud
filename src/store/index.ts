import { combineReducers } from '@reduxjs/toolkit';

import { mainReducer } from './reducer/reducer';

export const rootReducer = combineReducers({
  mainReducer,
});
