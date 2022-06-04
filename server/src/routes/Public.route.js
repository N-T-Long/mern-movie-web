const express = require("express");
const router = express.Router();
const { getAllMovies } = require("../controllers/Public.controller");

// @Router GET /api/movies
// @desc Get all movies
// @access public
router.get("/movies", getAllMovies);

module.exports = router;
