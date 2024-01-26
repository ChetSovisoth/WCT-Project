import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clear: (state) => {
      state.isError = false;
      state.message = "";
    },
    setAuthSignIn: (state, action) => {
      state.user = action.payload;
    },
    setAuthSignUp: (state, action) => {
      state.user = action.payload;
    },
    setAuthLogout: (state) => {
      state.user = null;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: () => {},
});

export const {
  clear,
  setAuthSignIn,
  setAuthSignUp,
  setAuthLogout,
  setLoading,
} = authSlice.actions;
export default authSlice.reducer;
