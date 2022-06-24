require("dotenv").config();
const mongoose = require("mongoose");
const { User, Movie } = require("../models/index");
const { use } = require("../routes/Admin.route");

const getProfile = async (req, res) => {
  const userID = req.payload.userID;
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
};

const updateProfile = async (req, res) => {
  const userID = req.payload.userID;
  const update = req.body;
  try {
    await User.findByIdAndUpdate(userID, update);
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
};

const getListLikeMovies = async (req, res) => {
  try {
    const userID = req.payload.userID;
    const user = await User.findById(userID).populate({
      path: "like_movies",
    });
    if (user)
      res.status(200).json({
        success: true,
        like_movies: user.like_movies,
      });
    else
      res.status(200).json({
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
};

const addNewLikeMovie = async (req, res) => {
  try {
    const userID = req.payload.userID;
    const user = await User.findById(userID);
    const movie = await Movie.findById(req.body.movieID);
    const listMovie = user.like_movies;
    let newLike = 0;
    let newListMovie = [];
    if (req.body.type_like) {
      listMovie.push(req.body.movieID);
      newListMovie = listMovie;
      newLike = movie.likes + 1;
    } else {
      newListMovie = listMovie.filter(
        (item) => item.toString() !== req.body.movieID
      );
      newLike = movie.likes - 1;
    }

    await User.findByIdAndUpdate(
      { _id: userID },
      { like_movies: newListMovie }
    );
    await Movie.findByIdAndUpdate(
      { _id: req.body.movieID },
      { likes: newLike }
    );
    const user2 = await User.findById(userID);
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
};

const getListFollowMovie = async (req, res) => {
  try {
    const userID = req.payload.userID;
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
};

const addNewFollowMovie = async (req, res) => {
  try {
    const userID = req.payload.userID;
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
};

const getListViewedMovie = async (req, res) => {
  try {
    const userID = req.payload.userID;
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
};

const addNewViewedMovie = async (req, res) => {
  try {
    const userID = req.payload.userID;
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
      message: "Update su ccess",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const addNewComment = async (req, res) => {
  const movie = await Movie.findById(req.params.movieID);
  if (!movie)
    return res.status(200).json({
      success: false,
      message: "Movie not found!!",
    });
  try {
    const comments = movie.comments;
    const newComment = [
      {
        ...req.body,
        _id: new mongoose.Types.ObjectId(),
        user: req.payload.userID,
      },
    ];
    const newComments = [...comments, ...newComment];
    await Movie.findByIdAndUpdate(req.params.movieID, {
      comments: newComments,
    });
    const commentsUpdated = await Movie.findById(req.params.movieID).populate({
      path: "comments",
      populate: {
        path: "user",
        select: "username URL_avatar",
      },
    });

    return res.status(200).json({
      success: true,
      message: "Movie added new comment!!!",
      commentsUpdated: commentsUpdated.comments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  getProfile,
  getListFollowMovie,
  getListLikeMovies,
  getListViewedMovie,
  addNewFollowMovie,
  addNewLikeMovie,
  addNewComment,
  addNewViewedMovie,
  updateProfile,
};
