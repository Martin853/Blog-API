const express = require("express");
const {
  createPost,
  getPosts,
  getPost,
  deletePost,
  updatePost,
} = require("../controllers/postsController");
const {
  getComments,
  createComment,
  deleteComment,
  updateComment,
} = require("../controllers/commentsController");

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
router.get("/:id/comments", getComments);

// Create A New Comment for a Post
router.post("/:id/comments", createComment);

// Delete A Comment
router.delete("/:postId/comments/:commentId", deleteComment);

// Update A Comment
router.patch("/:postId/comments/:commentId", updateComment);

module.exports = router;
