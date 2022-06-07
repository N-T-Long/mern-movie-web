import { createSlice } from "@reduxjs/toolkit";

const initState = {
  token: "",
  user: {
    username: "",
    URL_avata: "",
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    signIn(state, action) {
      state.token = action.payload.token;
      state.user.username = action.payload.username;
      state.user.URL_avata = action.payload.URL_avata;
      state.authenticate = true;
      state.message = "Login success!!!";
    },

    signUp(state, action) {
      state.token = "123";
      state.token = action.payload.token;
      state.user.username = action.payload.username;
      state.user.URL_avata = action.payload.URL_avata;
      state.authenticate = true;
      state.message = "Create success!!!";
    },

    signOut(state, action) {
      state.authenticate = false;
      state.token = "";
      state.user.username = "";
      state.user.URL_avata = "";
      state.authenticate = false;
      window.localStorage.removeItem("token");
    },

    isSignIn(state, action) {
      state.token = action.payload.token;
      state.user.username = action.payload.username;
      state.user.URL_avata = action.payload.URL_avata;
      state.authenticate = true;
      state.message = "User was signin!";
    },
  },
});

const { actions, reducer } = authSlice;
export const { signIn, signUp, signOut, isSignIn } = actions;
export default reducer;
