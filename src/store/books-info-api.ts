import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getLoginToken } from '../utils/get-token';

import { loadBooks, loadBooksCategories } from './reducers/main-slice';




export interface IPayloadAuth {
  identifier: string,
  password: string

}



export interface IResponseAuth {
  jwt: string,
  user: {
    id: number,
    username: string,
    email: string,
    provider: string,
    confirmed: boolean,
    blocked: boolean,
    createdAt: string,
    updatedAt: string,
    firstName: string,
    lastName: string,
    phone: string,
  }


}


export interface IError {
  data: null,
  error: {
    status: number,
    name: string,
    message: string,
    details: object
  }

}


export const booksInfoApi = createApi({
  reducerPath: 'booksInfoApi',
  tagTypes: ['books', 'categories'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://strapi.cleverland.by',
    prepareHeaders: (headers) => {
      const token = getLoginToken();
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
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

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(loadBooksCategories(data));
        } catch (e) {
          console.error('userApi createUser error', e);
        }
      },
      providesTags: () => ['categories']
    }),

    registrationUser: build.mutation({
      query: (payload) => ({
        url: '/api/auth/local/register',
        method: 'POST',
        body: payload
      }),

      // async onQueryStarted(arg, { dispatch, queryFulfilled }) {
      //   try {
      //     const { data } = await queryFulfilled;

      //     const { jwt } = data;

      //     document.cookie = `token=${jwt}`
      //   } catch (e) {
      //     console.error('userApi createUser error', e);
      //   }
      // },

    }),

    AuthUser: build.mutation<IResponseAuth, IPayloadAuth>({
      query: (payload) => ({
        url: '/api/auth/local',
        method: 'POST',
        body: payload
      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          const { jwt } = data;

          document.cookie = `token=${jwt}`
        } catch (e) {
          console.error('userApi createUser error', e);
        }
      },

    }),
  })
});

export const { useGetBooksQuery, useGetBookQuery, useGetCategoriesQuery, useRegistrationUserMutation, useAuthUserMutation } = booksInfoApi;

