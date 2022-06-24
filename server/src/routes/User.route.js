const {
  getProfile,
  getListFollowMovie,
  getListLikeMovies,
  getListViewedMovie,
  addNewFollowMovie,
  addNewLikeMovie,
  addNewViewedMovie,
  updateProfile,
  addNewComment,
} = require("../controllers/User.controller");

const express = require("express");
const route = express.Router();

const { verifyAccessToken } = require("../middlewares/auth");

// @Route GET /api/user/profile
// @desc Get profile of user
// @access private
route.get("/profile", verifyAccessToken, getProfile);

// @Route POST /api/user/profile/update
// @desc update profile of user
// @access private
route.post("/profile/update", verifyAccessToken, updateProfile);

// @Route GET /api/user/like-movies
// @desc List movie user liked
// @access private
route.get("/like-movies", verifyAccessToken, getListLikeMovies);

// @Route POST /api/user/like-movies
// @desc add a movie in list like-movies
// @access private
route.patch("/like-movies/new", verifyAccessToken, addNewLikeMovie);

// @Route GET /api/user/follow-movies
// @desc List movie user followd
// @access private
route.get("/follow-movies", verifyAccessToken, getListFollowMovie);

// @Route POST /api/user/follow-movies
// @desc add a movie in list follow-movies
// @access private
route.post("/follow-movies/new", verifyAccessToken, addNewFollowMovie);

// @Route GET /api/user/viewed-movies
// @desc List movie user viewed
// @access private
route.get("/viewed-movies", verifyAccessToken, getListViewedMovie);

// @Route POST /api/user/viewed-movies
// @desc add a movie in list viewed-movies
// @access private
route.post("/viewed-movies/new", verifyAccessToken, addNewViewedMovie);

// @Route POST /api/user//movies/:movieID/comment/new
// @desc add a comment to movie
// @access private
route.patch("/movies/:movieID/comment/new", verifyAccessToken, addNewComment);
module.exports = route;
