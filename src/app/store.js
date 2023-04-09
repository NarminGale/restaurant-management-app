import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { menuCategoryApi } from "../services/menuCatalogSlice/menuCatSlice";
import { waitersApi } from "../services/waitersSlice/waitersSlice";
import { tableNumbersApi } from "../services/tableNumbersSlice/tableNumbersSlice";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(menuCategoryApi.middleware)
      .concat(waitersApi.middleware)
      .concat(tableNumbersApi.middleware),
});

export default store;
