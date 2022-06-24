const { Movie, Slide, Genre, Country } = require("../models/index");

// fetch movie with full query
const getAllMovies = async (req, res) => {
  try {
    const { _page, _limit } = req.query;
    const paginate = {
      _page: _page ? parseInt(_page) : 1,
      _limit: _page ? parseInt(_limit) : 24,
    };

    //const movies = await Movie.find();
    //let re = new RegExp(req.body.name, "i");

    const query = {};
    if (req.query.name) {
      const newName = new RegExp(req.query.name, "i");
      Object.assign(query, { name_URL: newName });
    }
    if (req.query.country) {
      Object.assign(query, { country: req.query.country });
    }
    if (req.query.type_movie) {
      Object.assign(query, { type_movie: req.query.type_movie });
    }
    if (req.query.genres) {
      Object.assign(query, { genres: req.query.genres });
    }
    if (req.query.year) {
      Object.assign(query, { year: +req.query.year });
    }
    const total = await Movie.count(query);
    const movies = await Movie.find(query)
      .skip((paginate._page - 1) * paginate._limit)
      .limit(paginate._limit)
      .sort({ create_at: -1 });

    if (!movies)
      return res.status(200).json({
        success: false,
      });

    const pagination = { ...paginate, total_docs: total };
    return res.status(200).json({
      success: true,
      movies,
      pagination,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const getMovieByID = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.movieID)
      .populate({
        path: "comments",
        populate: {
          path: "user",
          select: "username URL_avatar",
        },
      })
      .populate({
        path: "genres",
        select: "name",
      });

    if (!movie)
      return res.status(404).json({
        success: false,
        message: "Movie not found!!!",
      });
    return res.status(200).json({
      success: true,
      message: "Get movie success!",
      movie,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error,
    });
  }
};

const getMovieByURL = async (req, res) => {
  try {
    const movie = await Movie.findOne({
      name_URL: req.params.movieURL,
    })
      .populate({
        path: "comments",
        populate: {
          path: "user",
          select: "username URL_avatar",
        },
      })
      .populate({
        path: "genres",
        select: "name",
      });

    if (!movie)
      return res.status(200).json({
        success: false,
        message: "Movie not found!!!",
      });
    return res.status(200).json({
      success: true,
      message: "Get movie success!",
      movie,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Get movie success!",
      movie,
    });
  }
};

// const getAllMovies = async (req, res) => {
//   const page = parseInt(req.query.page) || 1;
//   const limit = parseInt(req.query.limit) || 9;
//   const sort  = parse
//   const valueQuery = req.query.q || "";
//   try {
//     const movies = await Movie.find({
//       name: { $regex: ".*" + valueQuery + ".*" },
//     })
//       .skip((page - 1) * limit)
//       .limit(limit);
//     // .exec((err, doc) => {
//     //   if (err) {
//     //     return res.json(err);
//     //   } else {
//     //     return res.json({
//     //       total: doc.total,
//     //       page: page,
//     //       pageSize: limit,
//     //       movies: doc,
//     //     });
//     //   }
//     // });

//     // if (movies)
//     //   return res.status(200).json({
//     //     success: false,
//     //     total: Movie.count(),
//     //   });
//     return res.status(200).json({
//       success: true,
//       movies,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       success: false,
//       message: "Internal server error",
//     });
//   }
// };

const getAllGenre = async (req, res) => {
  try {
    const genres = await Genre.find();
    return res.status(200).json({
      success: true,
      genres,
      query: req.query,
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
    const countries = await Country.find();
    return res.status(200).json({
      success: true,
      countries,
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

const patchAddNewView = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.movieID);
    if (!movie)
      return res.status(200).json({
        success: false,
        message: "Movie not found!!!",
      });
    let newViews = movie.views + 1;

    await Movie.findByIdAndUpdate(req.params.movieID, {
      views: newViews,
    });
    const movieUpdated = await Movie.findById(req.params.movieID)
      .populate({
        path: "comments",
        populate: {
          path: "user",
          select: "username URL_avatar",
        },
      })
      .populate({
        path: "genres",
        select: "name",
      });
    return res.status(200).json({
      success: true,
      messeage: "Add new views success!",
      movieUpdated,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      messeage: "Internal server error!!!",
    });
  }
};

module.exports = {
  getMovieByID,
  getMovieByURL,
  getAllMovies,
  getAllGenre,
  getAllCountry,
  getALlSlide,
  getAllGenreTest,
  patchAddNewView,
};
