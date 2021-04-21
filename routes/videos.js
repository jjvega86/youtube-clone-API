const { Video, validate } = require("../models/video");
const express = require("express");
const router = express.Router();

// All endpoints and route handlers go here!

// GET all videos
router.get("/", async (req, res) => {
  try {
    const videos = await Video.find();
    return res.send(videos);
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});

// GET a single video by id
router.get("/:id", async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video)
      return res
        .status(400)
        .send(`The video with id "${req.params.id}" does not exist`);

    return res.send(video);
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});

// POST a single video
router.post("/", async (req, res) => {
  try {
    // validate the request body format before creating Video and adding to MongoDb
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error);

    const video = new Video({
      name: req.body.name,
      videoId: req.body.videoId,
      description: req.body.description,
    });

    await video.save();
    return res.send(video);
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});

// PUT (UPDATE) a single video
router.put('/:id', async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error);

    const video = await Video.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        videoId: req.body.videoId,
        description: req.body.description,
      },
      { new: true }
    );

    if (!video)
      return res
        .status(400)
        .send(`The video with id "${req.params.id}" does not exist.`);

    await video.save();
    return res.send(video);
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
  }
});

module.exports = router;
