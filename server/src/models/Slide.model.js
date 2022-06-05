const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SlideSchema = new Schema({
  URL_image: {
    type: String,
    require: true,
  },
  URL_movie: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  other_name: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("slides", SlideSchema);
