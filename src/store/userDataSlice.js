import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URI_API } from "../const/const";

export const fetchUserData = createAsyncThunk(
  "userData/fetchUserData",
  async (inputValue) => {
    const res = await fetch(`${URI_API}/users/${inputValue}`);
    const data = res.json();
    return data;
  }
);

const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    userData: {},
    error: null,
    isLoading: false,
  },

  extraReducers: {
    [fetchUserData.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchUserData.fulfilled]: (state, { payload }) => {
      state.userData = payload;
      state.isLoading = false;
      state.error = payload.message;
    },
    [fetchUserData.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default userDataSlice.reducer;
