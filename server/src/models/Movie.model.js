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
  cast: [String],
  genres: [mongoose.Types.ObjectId],
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
      user_id: {
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

module.exports = mongoose.model("movies", MovieSchema);
