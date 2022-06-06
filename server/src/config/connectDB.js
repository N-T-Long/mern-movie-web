const mongoose = require("mongoose");

// const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@247phim.y1sol.mongodb.net/?retryWrites=true&w=majority`;
// const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.6bzsr.mongodb.net/mern-movie-app?retryWrites=true&w=majority`;
const uri = `mongodb+srv://${process.env.DB_BACH_USERNAME}:${process.env.DB_BACH_PASSWORD}@cluster0.8fdcv.mongodb.net/?retryWrites=true&w=majority`
const connectDB = async () => {
  try {
    // Connect the client to server
    await mongoose.connect(uri, {});
    console.log("Connected succcessfully to server!");
  } catch (error) {
    console.log(error.messeage);
    process.exit(1);
  }
};

module.exports = connectDB;
