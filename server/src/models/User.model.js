const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    firstname: String,
    lastname: String,
    default: "",
  },
  gender: {
    type: String,
    default: "",
    enum: ["male", "female", "other"],
  },
  birhtday: Date,
  phone: {
    type: Number,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  URL_avatar: String,
  like_movies: [
    {
      type: mongoose.Types.ObjectId,
      ref: "movies",
    },
  ],
  follow_movies: [
    {
      type: mongoose.Types.ObjectId,
      ref: "movies",
    },
  ],
  viewed_movies: [
    {
      type: mongoose.Types.ObjectId,
      ref: "movies",
    },
  ],
  role: {
    type: String,
    required: true,
    default: "user",
    enum: ["user", "admin"],
  },
  create_at: {
    type: Date,
    require: true,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["nomal", "locked", "removed"],
    default: "nomal",
  },
});

module.exports = mongoose.model("users", UserSchema);
