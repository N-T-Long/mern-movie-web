const express = require("express");
const multer = require("multer");
const app = express();

const PORT = 4000;

const videoUpload = multer({
  storage: multer.diskStorage({
    destination: "src/videos", // Destination to store video
    filename: (req, file, cb) => {
      const uniqueSuffix =
        req.body.name +
        "_" +
        Date.now() +
        "." +
        file.originalname.split(".")[1];
      cb(null, file.fieldname + "_" + uniqueSuffix);
    },
  }),
  limits: {
    fileSize: 100000000000,
  },
  fileFilter(req, file, cb) {
    // upload only mp4 and mkv format
    if (!file.originalname.match(/\.(mp4|MPEG-4|AIV)$/)) {
      return cb(new Error("Please upload a video"));
    }
    cb(undefined, true);
  },
});

const imageUpload = multer({
  storage: multer.diskStorage({
    destination: "src/images/", // Destination to store video
    filename: (req, file, cb) => {
      const uniqueSuffix =
        req.body.name +
        "_" +
        Date.now() +
        "." +
        file.originalname.split(".")[1];
      cb(null, file.fieldname + "_" + uniqueSuffix);
    },
  }),
  limits: {
    fileSize: 100000000000,
  },
  fileFilter(req, file, cb) {
    // upload only image
    if (!file.originalname.match(/\.(PNG|jpg|JPEG)$/)) {
      return cb(new Error("Please upload a image"));
    }
    cb(undefined, true);
  },
});

app.get("/videos/:name", (req, res) => {
  res.sendFile(__dirname + `/videos/${req.params.name}`);
});
app.get("/images/:name", (req, res) => {
  res.sendFile(__dirname + `/images/${req.params.name}`);
});

// upload video and return a link
app.post(
  "/videos/upload",
  videoUpload.single("video"),
  (req, res) => {
    res.send(`http://localhost:4000/videos/${req.file.filename}`);
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

// upload image and return a link
app.post(
  "/images/upload",
  imageUpload.single("image"),
  (req, res) => {
    res.send(`http://localhost:4000/images/${req.file.filename}`);
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);
app.listen(PORT, () => console.log(`App listen on port: ${PORT}`));
