const User = require("../models/User");
const Movie = require("../models/Movie");
const Category = require("../models/Category");

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

const patchUser = () => {};

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json({
      success: true,
      movies,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const createMovie = async (req, res) => {
  const {
    name,
    other_name,
    type,
    year,
    duration,
    description,
    cast,
    genres,
    language,
    episode,
    URL_image,
  } = req.body;

  // Simple validation
  if (!name)
    return res
      .status(400)
      .json({ success: false, message: "Name is requited" });
  try {
    const newMovie = new Movie({
      name,
      other_name,
      type,
      year,
      duration,
      description,
      cast,
      genres,
      language,
      episode,
      URL_image,
    });

    await newMovie.save();
    res.json({ success: true, message: "Movie created! ", movie: newMovie });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const updateMovie = async (req, res) => {
  const {
    name,
    other_name,
    type,
    year,
    duration,
    description,
    cast,
    genres,
    language,
    episode,
    URL_image,
  } = req.body;

  // Simple validation
  if (!name)
    return res
      .status(400)
      .json({ success: false, message: "Name is requited" });
  try {
    const newMovie = new Movie({
      name,
      other_name,
      type,
      year,
      duration,
      description,
      cast,
      genres,
      language,
      episode,
      URL_image,
    });

    await newMovie.save();
    res.json({ success: true, message: "Movie created! ", movie: newMovie });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const createCategory = async (req, res) => {
  const { name, url, group } = req.body;

  try {
    if (name && url && group) {
      const newCategory = new Category({ name, url, group });
      await newCategory.save();
      return res.status(200).json({
        success: true,
        messeage: "Create category success",
      });
    } else
      return res.status(400).json({
        success: false,
        message: "Mixing infomation",
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const category = await Category.find();
    res.status(200).json({
      success: true,
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = {
  getAllMovies,
  getAllUsers,
  getAllCategories,
  createCategory,
  createMovie,
};
