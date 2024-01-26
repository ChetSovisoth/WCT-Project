import { configureStore, createSlice } from "@reduxjs/toolkit"
import authSlice from "./Redux/authSlice";

export const rootStore = configureStore({
    reducer: {
      auth: authSlice,
    },
  });