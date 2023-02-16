import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from '.';
import { ILocalState } from './reducers/type';
import { booksInfoApi } from './books-info-api';
import { mainSlice } from './reducers/main-slice';

// function getState() {
//   let state: ILocalState = {};

//   if (localStorage.getItem('app')) {
//     const app: string = localStorage.getItem('app') || '';

//     state = JSON.parse(app);
//   }

//   return state;
// }

const { reducer } = mainSlice;

export const store = configureStore({
  reducer: {
    reducer,
    [booksInfoApi.reducerPath]: booksInfoApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(booksInfoApi.middleware),
  // preloadedState: getState(),
});

// store.subscribe(() => {
//   localStorage.setItem('app', JSON.stringify(store.getState()));
// });
