import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticate: false,
  loginData: {},
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
  },
});

export const { loginData, isAuthenticated, authenticate, logout } =
  authSlice.actions;

export default authSlice.reducer;
