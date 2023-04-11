import { createSlice } from "@reduxjs/toolkit";

export const totalOrdersSlice = createSlice({
  name: "totalOrders",
  initialState: {
    amount: 0,
    quantity: 0,
  },
  reducers: {
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    setQuantity: (state, action) => {
      state.quantity = action.payload;
    },
  },
});

export const { setAmount, setQuantity } = totalOrdersSlice.actions;
