import { createSlice } from "@reduxjs/toolkit";

/**
 * Theme State Type
 */
interface ThemeState {
  mode: "light" | "dark";
}

/**
 * Initial State
 */
const initialState: ThemeState = {
  mode: "light",
};

/**
 * Theme Slice
 *
 * Demonstrates basic reducer pattern
 * using switch-like logic internally handled by createSlice.
 */
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLight: (state) => {
      state.mode = "light";
    },
    setDark: (state) => {
      state.mode = "dark";
    },
  },
});

export const { toggleTheme, setLight, setDark } = themeSlice.actions;

export default themeSlice.reducer;
