import CartSlice from "./slices/CartSlice";
import CounterSlice from "./slices/CounterSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    counterStore: CounterSlice,
    cartStore: CartSlice,
  },
});
