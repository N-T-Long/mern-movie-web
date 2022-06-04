const express = require("express");

const Movie = require("../models/Movie");
const { verifyToken } = require("../middlewares/auth");

const router = express.Router();

// @Router GET /api/movies
// @desc Get all movies
// @access public
router.get("/", async (req, res) => {
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
});

// @Router POST api/movies/create
// @desc Create movie
// @access Private
router.post("/create", verifyToken, async (req, res) => {
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
    res.status(400).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
