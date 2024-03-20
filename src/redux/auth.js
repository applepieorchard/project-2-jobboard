import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticate: false,
  loginData: {},
  filterJobList: [],
  jobLists: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticate: (state, action) => {
      state.loginData = action.payload;
      state.isAuthenticate = true;
    },
    logout: (state) => {
      state.loginData = null;
      state.isAuthenticate = false;
    },
    filteredData: (state, action) => {
      state.filterJobList = action.payload;
    },
    listData: (state, action) => {
      state.jobLists = action.payload;
    },
  },
});

export const {
  loginData,
  isAuthenticated,
  authenticate,
  logout,
  filteredData,
  listData,
} = authSlice.actions;

export default authSlice.reducer;
