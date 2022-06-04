const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: String,
  gender: {
    type: String,
    enum: ["Nam", "Nữ", "Khác"],
  },
  birhtday: Date,
  phone: String,
  email: {
    type: String,
    required: true,
  },
  URL_avatar: String,
  like_movies: [
    {
      movie_ID: {
        type: String,
      },
    },
  ],
  follow_movies: [
    {
      movie_ID: {
        type: String,
      },
    },
  ],
  viewed_movies: [
    {
      movie_ID: {
        type: String,
      },
    },
  ],
  role: {
    type: String,
    required: true,
    default: "User",
    enum: ["User", "Admin"],
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

module.exports = mongoose.model("user", UserSchema);
