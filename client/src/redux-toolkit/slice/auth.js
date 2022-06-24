import { createSlice } from "@reduxjs/toolkit";

const initState = {
  isLoggedIn: false,
  role: undefined,
  isLogging: false,
  isRegistering: false,
  isRegistered: false,
  currentUser: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    login(state, action) {
      state.islogging = true;
    },

    logginSuccess(state, action) {
      state.currentUser = action.payload;
      state.isLogging = false;
      state.isLoggedIn = true;
      state.role = action.payload.role;
    },

    loginFailed(state, action) {
      state.islogging = false;
    },

    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
      state.role = undefined;
    },

    register(state, action) {
      state.isRegistering = true;
    },

    registerSuccess(state, action) {
      state.isRegistering = false;
      state.isRegistered = true;
    },

    registerFailed(state, action) {
      state.isRegistering = false;
      state.currentUser = undefined;
    },
    reloadData(state, action) {
      state.currentUser = action.payload;
    },
  },
});

// Actions
export const authActions = authSlice.actions;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
