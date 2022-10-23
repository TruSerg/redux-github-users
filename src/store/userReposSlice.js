import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { URI_API } from "../const/const";

export const fetchUserRepos = createAsyncThunk(
  "userRepos/fetchUserRepos",
  async ([userLogin, reposPerPage, currentPage], { rejectedWithValue }) => {
    try {
      const res = await fetch(
        `${URI_API}/users/${userLogin}/repos?per_page=${reposPerPage}&page=${currentPage}`
      );
      const data = res.json();
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

const userReposSlice = createSlice({
  name: "userRepos",
  initialState: {
    userReposList: [],
    error: null,
    isLoading: false,
  },

  extraReducers: {
    [fetchUserRepos.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchUserRepos.fulfilled]: (state, { payload }) => {
      state.userReposList = payload;
      state.isLoading = false;
    },
    [fetchUserRepos.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default userReposSlice.reducer;
