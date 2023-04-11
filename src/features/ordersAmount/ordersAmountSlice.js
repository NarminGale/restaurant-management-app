import { createSlice } from "@reduxjs/toolkit";

export const ordersAmountSlice = createSlice({
  name: "ordersAmount",
  initialState: {
    amount: 0,
  },
  reducers: {
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
  },
});

export const { setAmount } = ordersAmountSlice.actions;
