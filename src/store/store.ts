import { configureStore } from '@reduxjs/toolkit';

import { booksInfoApi } from './books-info-api';
import { mainSlice } from './reducers/main-slice';

const { reducer } = mainSlice;

export const store = configureStore({
  reducer: {
    reducer,
    [booksInfoApi.reducerPath]: booksInfoApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(booksInfoApi.middleware),
});
