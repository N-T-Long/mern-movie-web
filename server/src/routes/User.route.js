const {
  getProfile,
  getListFollowMovie,
  getListLikeMovies,
  getListViewedMovie,
  addNewFollowMovie,
  addNewLikeMovie,
  addNewViewedMovie,
  updateProfile,
} = require("../controllers/User.controller");

require("dotenv").config();

const express = require("express");
const router = express.Router();

const { verifyAccessToken } = require("../middlewares/auth");

// @Router GET /api/user/profile
// @desc Get profile of user
// @access private
router.get("/profile", verifyAccessToken, getProfile);

// @Router POST /api/user/profile/update
// @desc update profile of user
// @access private
router.post("/profile/update", verifyAccessToken, updateProfile);

// @Router GET /api/user/like-movies
// @desc List movie user liked
// @access private
router.get("/like-movies", verifyAccessToken, getListLikeMovies);

// @Router POST /api/user/like-movies
// @desc add a movie in list like-movies
// @access private
router.post("/like-movies/new", verifyAccessToken, addNewLikeMovie);

// @Router GET /api/user/follow-movies
// @desc List movie user followd
// @access private
router.get("/follow-movies", verifyAccessToken, getListFollowMovie);

// @Router POST /api/user/follow-movies
// @desc add a movie in list follow-movies
// @access private
router.post("/follow-movies/new", verifyAccessToken, addNewFollowMovie);

// @Router GET /api/user/viewed-movies
// @desc List movie user viewed
// @access private
router.get("/viewed-movies", verifyAccessToken, getListViewedMovie);

// @Router POST /api/user/viewed-movies
// @desc add a movie in list viewed-movies
// @access private
router.post("/viewed-movies/new", verifyAccessToken, addNewViewedMovie);

module.exports = router;
