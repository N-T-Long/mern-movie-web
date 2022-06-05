const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CountrySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  name_URL: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("countries", CountrySchema);
