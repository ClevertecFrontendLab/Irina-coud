import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from '.';
import { ILocalState } from './reducer/type';


function getState() {
  let state: ILocalState = {};

  if (localStorage.getItem('app')) {
    const app: string = localStorage.getItem('app') || '';

    state = JSON.parse(app);
  }

  return state;
}

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: getState(),
});

store.subscribe(() => {
  localStorage.setItem('app', JSON.stringify(store.getState()));
});
