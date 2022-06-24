import { createSlice } from "@reduxjs/toolkit";

const initState = {
  _id: undefined,
  isSelecting: false,
  isSelected: false,
  isUpdate: false,
  isUpdating: false,
  isUpdated: false,
  currentEpisode: undefined,
  currentMovie: undefined,
  episodeSelected: undefined,
  infoMovieSelected: undefined,
  commentsMovieSlelected: undefined,
  updateInfoSucces: false,
  updateComments: false,
};

const movieSlice = createSlice({
  name: "movie",
  initialState: initState,
  reducers: {
    isSelecting(state, action) {
      state.isSelecting = true;
    },
    isSelected(state, action) {
      state._id = action.payload._id;
      state.isSelecting = false;
      state.isSelected = true;
      state.currentMovie = action.payload;
      state.commentsMovieSlelected = action.payload.comments;

      state.infoMovieSelected = {
        _id: action.payload._id,
        name: action.payload.name,
        name_URL: action.payload.name_URL,
        other_name: action.payload.other_name,
        year: action.payload.year,
        views: action.payload.views,
        likes: action.payload.likes,
        URL_image: action.payload.URL_image,
        description: action.payload.description,
        duration: action.payload.duration,
        director: action.payload.director,
        country: action.payload.country,
        genres: action.payload.genres,
        casts: action.payload.casts,
        rate: action.payload.rate,
        episodes: action.payload.episodes,
      };
    },

    unSelected(state, action) {
      state._id = undefined;
      state.isSelecting = false;
      state.isSelected = false;
      state.currentMovie = undefined;
      state.commentsMovieSlelected = undefined;
      state.currentEpisode = undefined;
      state.infoMovieSelected = undefined;
    },

    updateMovieSuccess(state, action) {
      state._id = action.payload._id;
      state.updateComments = false;
      state.isSelected = true;
      state.isUpdate = false;
      state.isUpdating = false;
      state.isUpdated = true;
      state.currentMovie = action.payload;
      state.infoMovieSelected = {
        _id: action.payload._id,
        name: action.payload.name,
        name_URL: action.payload.name_URL,
        other_name: action.payload.other_name,
        year: action.payload.year,
        views: action.payload.views,
        likes: action.payload.likes,
        URL_image: action.payload.URL_image,
        description: action.payload.description,
        duration: action.payload.duration,
        director: action.payload.director,
        country: action.payload.country,
        genres: action.payload.genres,
        casts: action.payload.casts,
        rate: action.payload.rate,
        episodes: action.payload.episodes,
      };
    },
    updateView(state, action) {
      state.isUpdating = true;
    },
    updateMovieFailed(state, action) {
      state.isUpdating = false;
      state.isUpdated = false;
      state.isUpdate = false;
    },

    playMovie(state, action) {
      state.currentEpisode = action.payload.episode;
      state.infoMovieSelected = action.payload.info;
    },

    addNewComment(state, action) {
      state.updateComments = true;
    },
    addNewCommentSussces(state, action) {
      state.updateComments = false;
      state.commentsMovieSlelected = action.payload;
    },
    updateCurentEpisodeSuccess(state, action) {
      state.currentEpisode = action.payload;
    },
    reloadData(state, action) {
      state.isUpdating = true;
    },
  },
});

// Action
export const movieActions = movieSlice.actions;

// Reducer
const movieReducer = movieSlice.reducer;
export default movieReducer;
