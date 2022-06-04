const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    requre: true,
  },
  group: {
    type: String,
    require: true,
    enum: ["PhimLe", "PhimBo", "QuocGia", "TheLoai"],
  },
});

module.exports = mongoose.model("category", CategorySchema);
