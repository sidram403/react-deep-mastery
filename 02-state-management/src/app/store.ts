import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

/**
 * Redux Store Configuration
 *
 * configureStore:
 * - Automatically sets up Redux DevTools
 * - Adds redux-thunk middleware by default
 * - Enables Immer for immutable logic
 */
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

/**
 * Infer RootState & AppDispatch types
 * This ensures strict Typescript usage in selectors & dispatch.
 */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
