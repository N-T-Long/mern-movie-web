const express = require("express");
const route = express.Router();

const {
  getAllMovies,
  createMovie,
  getAllUsers,
  getAllCategories,
  createCategory,
} = require("../controllers/Admin.controler");
const {
  verifyToken,
  authPage,
  verifyAccessToken,
} = require("../middlewares/auth");

// @Router GET /api/admin/users
// @dect Get all users
// @access private
route.get("/users", verifyAccessToken, authPage(["admin"]), getAllUsers);

// @Router GET /api/admin/movies
// @desc Get all movies
// @access public
route.get(
  "/movies/create",
  verifyAccessToken,
  authPage(["admin"]),
  createMovie
);

module.exports = route;
