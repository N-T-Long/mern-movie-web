import { createSlice } from "@reduxjs/toolkit";

const initState = {
  isLoading: false,
  countries: undefined,
  genres: undefined,
  slides: undefined,
};

const publicSlice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    loadingData(state, action) {
      state.isLoading = true;
    },

    loadedPublicData(state, action) {
      state.isLoading = false;
      state.countries = action.payload.countries;
      state.genres = action.payload.genres;
      state.slides = action.payload.slides;
    },
  },
});

// Actions
export const publicActions = publicSlice.actions;

// Reducer
const publicReducer = publicSlice.reducer;
export default publicReducer;
