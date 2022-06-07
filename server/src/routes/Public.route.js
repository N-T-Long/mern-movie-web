const express = require("express");
const route = express.Router();
const {
  getMovieByID,
  getAllMovies,
  getAllGenre,
  getAllCountry,
  getALlSlide,
  getAllGenreTest,
  patchAddNewView,
  getMovieByURL,
} = require("../controllers/Public.controller");

// @Router GET /api/movies/:movieID
// @desc Get  movies by id
// @access public
route.get("/movies/:movieID", getMovieByID);

// @Router GET /api/movies/:movieURL
// @desc Get  movies by movieURL
// @access public
route.get("/movies/url/:movieURL", getMovieByURL);

// @Router GET /api/movies
// @desc Get all movies
// @access public
route.get("/movies", getAllMovies);

// @Router GET /api/movies
// @desc Get all movies
// @access public
route.get("/movies", getAllMovies);

// @Router GET /api/genres
// @desc Get all genres
// @access public
route.get("/genres", getAllGenre);

// @Router GET /api/slides
// @desc Get all slides
// @access public
route.get("/slides", getALlSlide);

// @Router GET /api/countries
// @desc Get all countries
// @access public
route.get("/countries", getAllCountry);

// @Router GET /api/genres
// @desc Get all genres
// @access public
route.get("/genres/test", getAllGenreTest);

// @Router PATCH /api//movies/:movieID/newView
// @desc add new view
// @access public
route.patch("/movies/:movieID/newView", patchAddNewView);

module.exports = route;
