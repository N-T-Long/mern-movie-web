const express = require("express");

const Category = require("../models/Category");

const router = express.Router();

// @Router GET /api/categories
// @dect Get all categories
// @access public
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    if (categories) {
      return res.status(200).json({
        success: true,
        categories,
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

module.exports = router;
