import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { loadBooks } from './reducers/main-slice';

export const booksInfoApi = createApi({
  reducerPath: 'booksInfoApi',
  tagTypes: ['books'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://strapi.cleverland.by' }),
  endpoints: (build) => ({
    getBooks: build.query<any, void>({
      query: () => 'api/books',

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(loadBooks(data));
        } catch (e) {
          console.error('userApi createUser error', e);
        }
      },
      providesTags: () => ['books']
    }),
    getBook: build.query({
      query: (id) => `/api/books/${id}`,
    }),
    getCategories: build.query<any, void>({
      query: () => '/api/categories',
    })
  })
});

export const { useGetBooksQuery, useGetBookQuery, useGetCategoriesQuery } = booksInfoApi;

