import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ordersApi = createApi({
  reducerPath: "orders",
  tagTypes: ["Orders"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3500",
  }),
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => "/orders",
      providesTags: ["Orders"],
    }),
    addOrder: builder.mutation({
      query: (newOrder) => ({
        url: "/orders",
        method: "POST",
        body: newOrder,
      }),
      invalidatesTags: ["Orders"],
    }),
    updateOrder: builder.mutation({
      query: (newOrder) => ({
        url: `/orders/${newOrder.id}`,
        method: "PUT",
        body: { ...newOrder },
      }),
      invalidatesTags: ["Orders"],
    }),
    getOrderById: builder.query({
      query: (id) => `/orders/${id}`,
      providesTags: ["Orders"],
      transformResponse(baseQueryReturnValue) {
        return {
          ...baseQueryReturnValue,
          orderItems: baseQueryReturnValue?.orderItems?.map((item, index) => ({
            ...item,
            orderId: ++index,
          })),
        };
      },
    }),
    updateOrderItems: builder.mutation({
      query: ({ id, orderItems }) => ({
        url: `/orders/${id}`,
        method: "PATCH",
        body: { orderItems: orderItems },
      }),
      invalidatesTags: ["Orders"],
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useUpdateOrderMutation,
  useGetOrderByIdQuery,
  useAddOrderMutation,
  useUpdateOrderItemsMutation,
} = ordersApi;
