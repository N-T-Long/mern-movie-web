const { Movie } = require("../models/index");

const getAllMovies = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 9;
  const sort = req.query.limit;
  try {
    const movies = await Movie.find()
      .skip((page - 1) * limit)
      .limit(limit);
    // .exec((err, doc) => {
    //   if (err) {
    //     return res.json(err);
    //   } else {
    //     return res.json({
    //       total: doc.total,
    //       page: page,
    //       pageSize: limit,
    //       movies: doc,
    //     });
    //   }
    // });
    console.log(Movie.countDocuments());
    // if (movies)
    //   return res.status(200).json({
    //     success: false,
    //     total: Movie.count(),
    //   });
    return res.status(200).json({
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
const getALlSlide = async (req, res) => {
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

const getAllGenreTest = async (req, res) => {
  console.log(req.query);
  // try {
  //   const genres = await Genre.find();
  //   return res.status(200).json({
  //     success: true,
  //     genres,
  //   });
  // } catch (error) {
  //   console.log(error);
  //   return res.status(500).json({
  //     success: false,
  //     message: "Internal server error",
  //   });
  // }
};

module.exports = {
  getAllMovies,
  getAllGenre,
  getAllCountry,
  getALlSlide,
  getAllGenreTest,
};
