import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/**
 * Simulated API Call
 *
 * Returns user data after dealy.
 */
const fakeUserApi = (): Promise<{ name: string; email: string }> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "Sidram",
        email: "sidram@example.com",
      });
    }, 1500);
  });

/**
 *  Async Thunk
 *
 * Automatically dispatches:
 * - pending
 * - fulfilled
 * - rejected
 */

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (_, thunkAPI) => {
    try {
      const res = await fakeUserApi();
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch user");
    }
  },
);

/**
 * User State
 */
interface UserState {
  name: string;
  email: string;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  name: "",
  email: "",
  loading: false,
  error: null,
};

/**
 * User Slice
 *
 * Handles async lifecycle actions.
 */
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.name = action.payload.name;
        state.email = action.payload.email;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Unknown error";
      });
  },
});

export default userSlice.reducer;
