import { configureStore, combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth";

const rootReducer = combineReducers({
  auth: authReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
