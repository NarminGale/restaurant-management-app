import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tableNumbersApi = createApi({
  reducerPath: "tableNumbers",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3500",
  }),
  endpoints: (builder) => ({
    getTableNumbers: builder.query({
      query: () => "/tableNumbers",
    }),
  }),
});

export const { useGetTableNumbersQuery } = tableNumbersApi;
