import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticate: false,
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticate: (state, action) => {
      state.token = action.payload;
      state.isAuthenticate = true;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticate = false;
    },
  },
});

export const { token, isAuthenticated, authenticate, logout } =
  authSlice.actions;

export default authSlice.reducer;
