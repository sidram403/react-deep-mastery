import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import themeReducer from "../features/theme/themeSlice";
import userReducer from "../features/user/userSlice";

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
    theme: themeReducer,
    user: userReducer,
  },
});

/**
 * Infer RootState & AppDispatch types
 * This ensures strict Typescript usage in selectors & dispatch.
 */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
