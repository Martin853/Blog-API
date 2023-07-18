const express = require("express");
const {
  createPost,
  getPosts,
  getPost,
  deletePost,
  updatePost,
} = require("../controllers/postsController");

const router = express.Router();

// Get All Posts
router.get("/", getPosts);

// Get A Single Post
router.get("/:id", getPost);

// Create A New Post
router.post("/", createPost);

// Delete A Post
router.delete("/:id", deletePost);

// Update A Post
router.patch("/:id", updatePost);

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
