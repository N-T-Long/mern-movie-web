const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GenresSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  name_URL: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("genres", GenresSchema);
