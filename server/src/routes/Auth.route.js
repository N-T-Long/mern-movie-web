require("dotenv").config();
const express = require("express");

const {
  registerController,
  loginController,
} = require("../controllers/Auth.controler");

const router = express.Router();

// @route POST api/auth/register
// @desc Register user
// @access Public
router.post("/register", registerController);

// @route POST api/auth/login
// @desc Login user
// @access Public
router.post("/login", loginController);

module.exports = router;
