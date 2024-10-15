import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice.ts";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

// Types for the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
