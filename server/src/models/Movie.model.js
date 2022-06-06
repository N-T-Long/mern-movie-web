const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  other_name: {
    type: String,
    required: true,
  },
  name_URL: {
    type: String,
    require: true,
    unique: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  views: {
    type: Number,
    default: 0,
  },
  director: [{ name: String }],
  country: {
    type: mongoose.Types.ObjectId,
    ref: "countries",
  },
  type_movie: {
    type: String,
    enum: ["phimle", "phimbo"],
  },
  year: {
    type: Number,
  },
  duration: Number,
  description: String,
  casts: [{ name: String }],
  genres: [
    {
      type: mongoose.Types.ObjectId,
      ref: "genres",
    },
  ],
  language: String,
  episodes: [
    {
      name: String,
      URL_episode: String,
    },
  ],
  comments: [
    {
      body: String,
      userID: {
        type: mongoose.Types.ObjectId,
        ref: "users",
      },
    },
  ],
  rate: {
    type: Number,
    default: 0,
  },
  URL_image: String,
  create_at: {
    type: Date,
    require: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("movies", MovieSchema);
