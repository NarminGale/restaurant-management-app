import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const menuCategoryApi = createApi({
  reducerPath: "menuCategories",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3500",
  }),
  endpoints: (builder) => ({
    getMenuCategories: builder.query({
      query: () => "/menuCategories",
    }),
    getCategoryMeals: builder.query({
      query: (catId) => `/menuCategories/${catId}`,
    }),
  }),
});

export const { useGetMenuCategoriesQuery, useGetCategoryMealsQuery } =
  menuCategoryApi;
