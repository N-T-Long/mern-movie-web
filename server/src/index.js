require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { exit } = require("process");

const {
  adminRoute,
  authRoute,
  categoryRoute,
  publicRoute,
  userRoute,
} = require("./routes/index");
const connectDB = require("./config/connectDB");

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;

// Connect mongodb
connectDB();

app.use("/api/", publicRoute);
app.use("/api/admin", adminRoute);
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/categories", categoryRoute);

app.listen(PORT, () => console.log(`App listen on port: ${PORT}`));
