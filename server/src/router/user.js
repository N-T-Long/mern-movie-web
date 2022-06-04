require("dotenv").config();

const { Router } = require("express");
const express = require("express");
const jwt = require("jsonwebtoken");

const { verifyToken } = require("../middlewares/auth");
const User = require("../models/User");
const Movie = require("../models/Movie");
const router = express.Router();

// @Router get /api/user
// @desc Get profile of user
// @access private
router.get("/", verifyToken, async (req, res) => {
  const userID = jwt.decode(req.headers.authorization.split(" ")[1]).userID;

  try {
    const user = await User.findById(userID);
    if (user)
      res.status(200).json({
        success: true,
        user,
      });
    else
      res.status(404).json({
        success: false,
        message: "ID user not found",
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// @Router GET /api/user/profile
// @desc Get profile of user
// @access private
router.get("/profile", verifyToken, async (req, res) => {
  const userID = jwt.decode(req.headers.authorization.split(" ")[1]).userID;

  try {
    const user = await User.findById(userID);
    if (user)
      res.status(200).json({
        success: true,
        user: {
          name: user.name,
          email: user.email,
          URL_avatar: user.URL_avatar,
        },
      });
    else
      res.status(404).json({
        success: false,
        message: "ID user not found",
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// @Router POST /api/user/profile/update
// @desc update profile of user
// @access private
router.post("/profile/update", verifyToken, async (req, res) => {
  const userID = jwt.decode(req.headers.authorization.split(" ")[1]).userID;
  const update = req.body;
  try {
    let user = await User.findByIdAndUpdate({ _id: userID }, update);
    res.status(200).json({
      success: true,
      messeage: "Update profile success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// @Router GET /api/user/like-movies
// @desc List movie user liked
// @access private
router.get("/like-movies", verifyToken, async (req, res) => {
  try {
    const userID = jwt.decode(req.headers.authorization.split(" ")[1]).userID;
    const user = await User.findById(userID);
    if (user)
      res.status(200).json({
        success: true,
        like_movies: user.like_movies,
      });
    else
      res.status(404).json({
        success: false,
        message: "ID user not found",
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// @Router POST /api/user/like-movies
// @desc add a movie in list like-movies
// @access private
router.post("/like-movies/new", verifyToken, async (req, res) => {
  try {
    const userID = jwt.decode(req.headers.authorization.split(" ")[1]).userID;
    const user = await User.findById(userID);
    const listMovie = user.like_movies;
    const update = req.body;
    listMovie.push(update);
    console.log(listMovie);
    await User.findByIdAndUpdate({ _id: userID }, { like_movies: listMovie });
    res.status(200).json({
      success: true,
      message: "Update success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// @Router GET /api/user/follow-movies
// @desc List movie user followd
// @access private
router.get("/follow-movies", verifyToken, async (req, res) => {
  try {
    const userID = jwt.decode(req.headers.authorization.split(" ")[1]).userID;
    const user = await User.findById(userID);
    if (user)
      res.status(200).json({
        success: true,
        follow_movies: user.follow_movies,
      });
    else
      res.status(404).json({
        success: false,
        message: "ID user not found",
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// @Router POST /api/user/follow-movies
// @desc add a movie in list follow-movies
// @access private
router.post("/follow-movies/new", verifyToken, async (req, res) => {
  try {
    const userID = jwt.decode(req.headers.authorization.split(" ")[1]).userID;
    const user = await User.findById(userID);
    const listMovie = user.follow_movies;
    const update = req.body;
    listMovie.push(update);
    console.log(listMovie);
    await User.findByIdAndUpdate({ _id: userID }, { follow_movies: listMovie });
    res.status(200).json({
      success: true,
      message: "Update success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// @Router GET /api/user/viewed-movies
// @desc List movie user viewed
// @access private
router.get("/viewed-movies", verifyToken, async (req, res) => {
  try {
    const userID = jwt.decode(req.headers.authorization.split(" ")[1]).userID;
    const user = await User.findById(userID);
    if (user)
      res.status(200).json({
        success: true,
        viewed_movies: user.viewed_movies,
      });
    else
      res.status(404).json({
        success: false,
        message: "ID user not found",
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// @Router POST /api/user/viewed-movies
// @desc add a movie in list viewed-movies
// @access private
router.post("/viewed-movies/new", verifyToken, async (req, res) => {
  try {
    const userID = jwt.decode(req.headers.authorization.split(" ")[1]).userID;
    const user = await User.findById(userID);
    const movie = await Movie.findById(req.body.movie_ID);
    const viewUPdate = movie.view + 1;
    const listMovie = user.viewed_movies;
    const update = req.body;
    listMovie.push(update);
    await User.findByIdAndUpdate({ _id: userID }, { viewed_movies: listMovie });
    await Movie.findByIdAndUpdate(
      { _id: update.movie_ID },
      { view: viewUPdate }
    );
    res.status(200).json({
      success: true,
      message: "Update success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

module.exports = router;
