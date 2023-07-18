const express = require("express");
const Post = require("../models/postModel");

const router = express.Router();

// Get All Posts
router.get("/", (req, res) => {
  res.json({ mssg: "Get All Posts" });
});

// Get A Single Post
router.get("/:id", (req, res) => {
  res.json({ mssg: "Get A Single Post" });
});

// Post A New Post
router.post("/", async (req, res) => {
  const { title, description, image } = req.body;

  try {
    const post = await Post.create({ title, description, image });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete A Post
router.delete("/:id", (req, res) => {
  res.json({ mssg: "Delete A Post" });
});

// Update A Post
router.put("/:id", (req, res) => {
  res.json({ mssg: "Update A Post" });
});

// Comments Routes

// Get All Comments for a Post
router.get("/:id/comments", (req, res) => {
  res.json({ mssg: "Get All Comments for a Post" });
});

// Post A New Comment for a Post
router.post("/:id/comments", (req, res) => {
  res.json({ mssg: "Post A New Comment for a Post" });
});

// Delete A Comment
router.delete("/:id/comments/:commentId", (req, res) => {
  res.json({ mssg: "Delete A Comment" });
});

// Update A Comment
router.put("/:id/comments/:commentId", (req, res) => {
  res.json({ mssg: "Update A Comment" });
});

module.exports = router;
