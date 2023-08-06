import { configureStore } from "@reduxjs/toolkit";
import { accountReducer } from "./dataSlice/accountSlice";
const store = configureStore({
  reducer: { accountSlice: accountReducer },
});

export default store;
