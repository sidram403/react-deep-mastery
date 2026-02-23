/**
 * Counter state Type
 */

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

/**
 * Initial State
 */
const initialState: CounterState = {
  value: 0,
};

/**
 * createSlice:
 * - Generates reducer
 * - Generates action crators
 * - Uses Immer internally
 */
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

/**
 * Export actions
 */
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

/**
 * Export reducer
 */
export default counterSlice.reducer;
