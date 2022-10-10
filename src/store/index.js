import { configureStore } from "@reduxjs/toolkit";

import userDataReducer from "./userDataSlice";
import userReposReducer from "./userReposSlice";

export const store = configureStore({
  reducer: {
    userData: userDataReducer,
    userRepos: userReposReducer,
  },
});
