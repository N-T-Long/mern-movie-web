require("dotenv").config();

const argon2 = require("argon2");
const User = require("../models/User.model");
const { signAccessToken } = require("../middlewares/auth");

// register new account
const registerController = async (req, res) => {
  const { username, password, email } = req.body;

  // Simble validation
  if (!username || !password || !email)
    return res.status(400).json({
      success: false,
      messeage: "Missing username and/or password and/or email",
    });

  try {
    // Check for existing user
    const user = await User.findOne({ username });
    if (user)
      return res
        .status(400)
        .json({ success: false, messeage: "Username already taken" });

    // Check for existing email
    const user2 = await User.findOne({ email });
    if (user2)
      return res
        .status(400)
        .json({ success: false, messeage: "Email already taken" });

    // All good

    const hashedPassword = await argon2.hash(password);
    const newUser = new User({
      username,
      password: hashedPassword,
      email: email,
    });
    await newUser.save();

    // Return token
    const accessToken = signAccessToken({ userID: user._id, role: user.role });

    res.json({
      success: true,
      messeage: "User created successfully",
      accessToken: accessToken,
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
  const { username, email, password } = req.body;
  // Simble validation
  if (!username || !password || !email)
    return res.status(400).json({
      success: false,
      messeage: "Missing username and/or password and/or email",
    });
  try {
    const user = await User.findOne({ username });
    if (!user)
      return res.status(400).json({
        success: false,
        message: "Incorrect username or password",
      });

    // Username found
    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid)
      return res.status(400).json({
        success: false,
        message: "Incorrect username or password",
      });

    // All good
    const accessToken = await signAccessToken({
      userID: user._id,
      role: user.role,
    });

    res.json({
      success: true,
      messeage: "Login successfully",
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