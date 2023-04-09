import { combineReducers } from "@reduxjs/toolkit";
import { waitersApi } from "../services/waitersSlice/waitersSlice";
import { pageTitleSlice } from "../features/pageTitle/pageTitleSlice";
import { menuCategoryApi } from "../services/menuCatalogSlice/menuCatSlice";
import { tableNumbersApi } from "../services/tableNumbersSlice/tableNumbersSlice";
// import other feature reducers as needed

const rootReducer = combineReducers({
  [pageTitleSlice.name]: pageTitleSlice.reducer,
  [menuCategoryApi.reducerPath]: menuCategoryApi.reducer,
  [waitersApi.reducerPath]: waitersApi.reducer,
  [tableNumbersApi.reducerPath]: tableNumbersApi.reducer,

  // add other feature reducers as needed
});

export default rootReducer;
