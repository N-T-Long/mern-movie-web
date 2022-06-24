const mongoose = require("mongoose");
const { User, Movie, Slide, Genre, Country } = require("../models/index");

const createNewCountry = async (req, res) => {
  const { name, name_URL } = req.body;
  if (!name) {
    return res.status(401).json({
      success: false,
      message: "Mixing name",
    });
  }
  if (!name_URL) {
    return res.status(401).json({
      success: false,
      message: "Mixing name_URL",
    });
  }

  try {
    const newCountry = new Country({ name, name_URL });
    // add new slide
    await newCountry.save();
    return res.status(200).json({
      success: true,
      message: "New country created",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const createNewEpisode = async (req, res) => {
  const movie = await Movie.findById(req.params.movieID);
  if (!movie)
    return res.status(200).json({
      success: false,
      message: "Movie not found!!",
    });

  try {
    const episodes = movie.episodes;
    const newEpisode = [
      {
        ...req.body,
        _id: new mongoose.Types.ObjectId(),
      },
    ];

    const newEpisodes = [...episodes, ...newEpisode];
    await Movie.findByIdAndUpdate(req.params.movieID, {
      episodes: newEpisodes,
    });
    return res.status(200).json({
      success: true,
      message: "Movie added new episode!!! ",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const createNewGenre = async (req, res) => {
  const { name, name_URL } = req.body;
  if (!name) {
    return res.status(401).json({
      success: false,
      message: "Mixing name",
    });
  }
  if (!name_URL) {
    return res.status(401).json({
      success: false,
      message: "Mixing name_URL",
    });
  }

  try {
    const newGenre = new Genre({ name, name_URL });
    // add new slide
    await newGenre.save();
    return res.status(200).json({
      success: true,
      message: "New genre created",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const createNewMovie = async (req, res) => {
  const {
    name,
    other_name,
    name_URL,
    likes,
    views,
    director,
    country,
    type_movie,
    year,
    duration,
    description,
    casts,
    genres,
    language,
    episodes,
    comments,
    rate,
    URL_image,
    create_at,
  } = req.body;

  const movie = await Movie.findOne({ name: name });
  if (movie)
    return res.status(200).json({
      success: false,
      message: "Movie already exist!!",
    });

  try {
    const newMovie = new Movie({
      name,
      other_name,
      name_URL,
      likes,
      views,
      director,
      country,
      type_movie,
      year,
      duration,
      description,
      casts,
      genres,
      language,
      episodes,
      comments,
      rate,
      URL_image,
      create_at,
    });

    await newMovie.save();
    res.json({ success: true, message: "Movie created! ", movie: newMovie });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const createNewSlide = async (req, res) => {
  const { URL_image, URL_movie, name, other_name } = req.body;
  if (!URL_image) {
    return res.status(200).json({
      success: false,
      message: "Mixing URL_Image",
    });
  }
  if (!URL_movie) {
    return res.status(200).json({
      success: false,
      message: "Mixing URL_movie",
    });
  }

  try {
    const slide = new Slide({ URL_image, URL_movie, name, other_name });
    // add new slide
    slide.save();

    const slides = await Slide.find();

    // remove first slice if count > 4
    if (slides.length > 3) await Slide.findByIdAndRemove(slides[0]._id);

    return res.status(200).json({
      success: true,
      message: "New slide created",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const getAllCountry = async (req, res) => {
  try {
    const Countries = await Country.find();
    return res.status(200).json({
      success: true,
      Countries,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find().sort({ create_at: -1 });
    return res.status(200).json({
      success: true,
      movies,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const getAllGenre = async (req, res) => {
  try {
    const genres = await Genre.find();
    return res.status(200).json({
      success: true,
      genres,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (users) {
      return res.status(200).json({
        success: true,
        users,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Not Found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const getALlSlides = async (req, res) => {
  try {
    const slides = await Slide.find();
    return res.status(200).json({
      success: true,
      slides,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.userID);
  if (!user)
    return res.status(200).json({
      success: false,
      message: "user not found!",
    });
  try {
    await User.findByIdAndDelete(req.params.userID);
    return res.status(200).json({
      success: true,
      message: "Delete success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
const deleteMovie = async (req, res, next) => {
  const movie = await Movie.findById(req.params.movieID);
  if (!movie)
    return res.status(200).json({
      success: false,
      message: "Movie not found!",
    });
  try {
    await Movie.findByIdAndDelete(req.params.movieID);
    return res.status(200).json({
      success: true,
      message: "Delete success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const patchLockedUser = async (req, res, next) => {
  const user = await User.findById(req.params.userID);

  if (!user) {
    return res.status(200).json({
      success: false,
      messeage: "User not found!",
    });
  }
  try {
    const userLocked = await User.findByIdAndUpdate(req.params.userID, {
      status: "locked",
    });
    return res.status(200).json({
      success: true,
      messeage: "User locked!!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const patchRemovedUser = async (req, res, next) => {
  const user = await User.findById(req.params.userID);

  if (!user) {
    return res.status(200).json({
      success: false,
      messeage: "User not found!",
    });
  }
  try {
    await User.findByIdAndUpdate(req.params.userID, {
      status: "removed",
    });
    return res.status(200).json({
      success: true,
      messeage: "User removed!!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const updateMovie = async (req, res) => {
  const movie = await Movie.findById(req.params.movieID);
  if (!movie)
    return res.status(200).json({
      success: false,
      message: "Movie not found!!",
    });
  try {
    await Movie.findByIdAndUpdate(req.params.movieID, req.body);
    return res.status(200).json({
      success: true,
      message: "Movie updated! ",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  getAllMovies,
  getAllUsers,
  createNewMovie,
  createNewEpisode,
  deleteMovie,
  deleteUser,
  patchLockedUser,
  patchRemovedUser,
  updateMovie,
  createNewSlide,
  getALlSlides,
  createNewGenre,
  getAllGenre,
  getAllCountry,
  createNewCountry,
};
