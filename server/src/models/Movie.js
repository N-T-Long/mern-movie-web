const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  other_name: String,
  likes: {
    type: Number,
    default: 0,
  },
  view: {
    type: Number,
    default: 0,
  },
  type: String,
  year: Number,
  duration: Number,
  description: String,
  cast: [
    {
      name: String,
    },
  ],
  genres: [
    {
      name: String,
    },
  ],
  language: String,
  episode: [
    {
      name: String,
      URL_episode: String,
    },
  ],
  comments: [
    {
      body: String,
      user_ID: {
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
});

module.exports = mongoose.model("movie", MovieSchema);
