const express = require("express");
const multer = require("multer");
const fs = require("fs");
const app = express();

const PORT = 4000;

app.get("/videos/:name", (req, res) => {
  res.sendFile(__dirname + `/videos/${req.params.name}`);
});

const videoStorage = multer.diskStorage({
  destination: "src/videos", // Destination to store video
  filename: (req, file, cb) => {
    const uniqueSuffix =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      "." +
      file.originalname.split(".")[1];
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const videoUpload = multer({
  storage: videoStorage,
  limits: {
    fileSize: 100000000000,
  },
  fileFilter(req, file, cb) {
    // upload only mp4 and mkv format
    if (!file.originalname.match(/\.(mp4|MPEG-4|mkv)$/)) {
      return cb(new Error("Please upload a video"));
    }
    cb(undefined, true);
  },
});

app.post(
  "/uploadVideo",
  videoUpload.single("video"),
  (req, res) => {
    res.send(req.file);
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

app.listen(PORT, () => console.log(`App listen on port: ${PORT}`));
