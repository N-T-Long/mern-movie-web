import { createSlice } from "@reduxjs/toolkit";

const initState = {
  movielist: undefined,
  loadingData: false,
};

const adminSlice = createSlice({
  name: "movieList",
  initialState: initState,
  reducers: {
    fetchMovieList(state, action) {
      state.loadingData = true;
    },
    fetchMovieListSuccess(state, action) {
      state.movielist = action.payload;
      state.loadingData = false;
    },
    fetchMovieListFailed(state, action) {
      state.loadingData = false;
    },
  },
});

// Action
export const adminActions = adminSlice.actions;

// Reducers
const adminReducer = adminSlice.reducer;
export default adminReducer;
