const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const YearSchema = new Schema({
  name: {
    type: Number,
    required: true,
  },
  name_URL: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("years", YearSchema);
