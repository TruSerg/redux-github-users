import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { URI_API } from "../const/const";

export const fetchUserRepos = createAsyncThunk(
  "userRepos/fetchUserRepos",
  async (user) => {
    const [userLogin, reposPerPage, currentPage] = user;

    const res = await fetch(
      `${URI_API}/users/${userLogin}/repos?per_page=${reposPerPage}&page=${currentPage}`
    );
    const data = res.json();
    return data;
  }
);

const userReposSlice = createSlice({
  name: "userRepos",
  initialState: {
    userReposList: [],
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
    [fetchUserRepos.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default userReposSlice.reducer;
