import { createSlice } from "@reduxjs/toolkit";

export const pageTitleSlice = createSlice({
  name: "pageTitle",
  initialState: {
    title: "Home",
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const { setTitle } = pageTitleSlice.actions;
