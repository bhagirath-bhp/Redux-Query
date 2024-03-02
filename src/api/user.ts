const uri = import.meta.env.VITE_APP_URI;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: uri }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (formData) => ({
        url: '/user/signup',
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
    }),
    signin: builder.mutation({
      query: (formData) => {
        return {
        url: '/user/signin',
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }},
    }),
  }),
});

export const { useSignupMutation, useSigninMutation } = userApi;

export const { reducer: userApiReducer, middleware: userApiMiddleware } = userApi;
