import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const waitersApi = createApi({
  reducerPath: "waiters",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3500",
  }),
  endpoints: (builder) => ({
    getWaiters: builder.query({
      query: () => "/waiters",
    }),
  }),
});

export const { useGetWaitersQuery } = waitersApi;
