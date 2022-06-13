require("dotenv").config();

const argon2 = require("argon2");
const User = require("../models/User.model");
const { signAccessToken } = require("../middlewares/auth");

// register new account
const registerController = async (req, res) => {
  const { username, password, email } = req.body;

  // Simble validation
  if (!username || !password || !email)
    return res.status(200).json({
      success: false,
      message: "Missing username and/or password and/or email",
    });

  try {
    // Check for existing user
    const user = await User.findOne({ username: username });
    if (user)
      return res
        .status(200)
        .json({ success: false, messeage: "Username already taken" });
    // Check for existing email
    const user2 = await User.findOne({ email });
    if (user2)
      return res
        .status(200)
        .json({ success: false, messeage: "Email already taken" });

    // All good

    const hashedPassword = await argon2.hash(password);
    const newUser = new User({
      username: username,
      password: hashedPassword,
      email: email,
    });
    await newUser.save();

    const accessToken = await signAccessToken({
      userID: newUser._id,
      role: newUser.role,
    });

    return res.status(200).json({
      success: true,
      message: "User created successfully",
      accessToken: accessToken,
      newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: `${error.message}`,
    });
  }
};

const loginController = async (req, res) => {
  const { username, password } = req.body;
  // Simble validation
  if (!username || !password)
    return res.status(200).json({
      success: false,
      message: "Missing username and/or password and/or email",
    });
  try {
    const user = await User.findOne({ username });
    if (!user)
      return res.status(200).json({
        success: false,
        message: "Incorrect username",
      });

    // Username found
    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid)
      return res.status(200).json({
        success: false,
        message: "Incorrect username or password",
      });

    // All good
    const accessToken = await signAccessToken({
      userID: user._id,
      role: user.role,
    });

    res.status(200).json({
      success: true,
      message: "Login successfully",
      accessToken: accessToken,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: `${error.message}`,
    });
  }
};

module.exports = { registerController, loginController };
