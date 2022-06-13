require("dotenv").config();

const JWT = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (!token)
    return res.status(400).json({
      success: false,
      messeage: "Access token not found",
    });

  try {
    const decoded = JWT.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.userId = decoded.userID;
    next();
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      messease: "Invalid token",
    });
  }
};

const verifyAccessToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
    if (err) {
      return res.status(200).json({
        success: false,
        message: "Unauthorization",
      });
    }
    req.payload = payload;
    next();
  });
};
const signAccessToken = async (accessToken) => {
  return new Promise((resolve, reject) => {
    const secret = process.env.ACCESS_TOKEN_SECRET;
    const options = {};

    JWT.sign(accessToken, secret, options, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
};

// Check user role
const authPage = (permission) => {
  return (req, res, next) => {
    const role = req.payload.role;
    if (!permission.includes(role)) {
      return res.status(401).json({
        success: false,
        message: "User don't have permission",
      });
    }
    next();
  };
};
module.exports = { signAccessToken, verifyToken, authPage, verifyAccessToken };
