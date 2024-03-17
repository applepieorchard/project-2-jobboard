import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalOpen: false,
};

export const authSlice = createSlice({
  name: "modal",
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
