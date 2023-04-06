import { combineReducers } from "@reduxjs/toolkit";
import { pageTitleSlice } from "../features/pageTitle/pageTitleSlice";
// import other feature reducers as needed

const rootReducer = combineReducers({
  [pageTitleSlice.name]: pageTitleSlice.reducer,
  // add other feature reducers as needed
});

export default rootReducer;
