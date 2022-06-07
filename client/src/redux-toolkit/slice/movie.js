import { createSlice } from "@reduxjs/toolkit";

const initState = {
  movieID: "",
};

const movieSlice = createSlice({
  name: "movie",
  initialState: initState,
  reducers: {
    isSelected(state, action) {
      state.movieID = action.payload;
    },
    unSelected(state, action) {
      state.movieID = "";
    },
  },
});

const { actions, reducer } = movieSlice;
export const { isSelected } = actions;
export default reducer;
