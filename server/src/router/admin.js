const express = require("express");

const { verifyToken } = require("../middlewares/auth");
const checkAdmin = require("../middlewares/role");
const User = require("../models/User");
const Movie = require("../models/Movie");
const Category = require("../models/Category");

const router = express.Router();

// @Router GET /api/admin/users
// @dect Get all users
// @access private
router.get("/users", verifyToken, checkAdmin, async (req, res) => {
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
});

// @Router GET /api/admin/movies
// @desc Get all movies
// @access public
router.get("/movies", async (req, res) => {
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

// @Router POST /api/admin/category/create
// @dect Create new category
// @access private
router.post("/category/create", verifyToken, checkAdmin, async (req, res) => {
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
});

// @Router GET /api/admin/categories
// @desc Get all categories
// @access public
router.get("/categories", verifyToken, checkAdmin, async (req, res) => {
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
});

// @Router GET /api/admin/categories/{group}
// @desc Get all categories
// @access public
router.get("/categories/:group", verifyToken, checkAdmin, async (req, res) => {
  try {
    const category = await Category.find({ group: req.params });
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
});

module.exports = router;
