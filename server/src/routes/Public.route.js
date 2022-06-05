const express = require("express");
const route = express.Router();
const {
  getAllMovies,
  getAllGenre,
  getAllCountry,
  getALlSlide,
  getAllGenreTest,
} = require("../controllers/Public.controller");

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
module.exports = route;
