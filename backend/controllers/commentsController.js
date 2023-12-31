const Comment = require("../models/commentModel");
const mongoose = require("mongoose");

// Get All Comments
const getComments = async (req, res) => {
  const postId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(postId)) {
    return res.status(404).json({ error: "Post not found" });
  }

  try {
    const comments = await Comment.find({ postId }).sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Create A Comment
const createComment = async (req, res) => {
  const { content, email } = req.body;

  console.log(content);

  const postId = req.params.id;
  const userId = req.user._id;

  if (!mongoose.Types.ObjectId.isValid(postId)) {
    return res.status(404).json({ error: "Post not found" });
  }

  try {
    const comment = await Comment.create({ content, email, userId, postId });

    res.status(200).json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Comment
const deleteComment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: `Post doesn't exist` });
  }

  try {
    // Find and delete the post
    const post = await Post.findByIdAndDelete(id);

    if (!post) {
      return res.status(404).json({ error: `Post doesn't exist` });
    }

    await Comment.deleteMany({ post: id });

    res
      .status(200)
      .json({ message: "Post and its comments deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update A Comment
const updateComment = async (req, res) => {
  const { postId, commentId } = req.params;

  if (
    !mongoose.Types.ObjectId.isValid(postId) ||
    !mongoose.Types.ObjectId.isValid(commentId)
  ) {
    return res.status(404).json({ error: "Post or Comment not found" });
  }

  try {
    const comment = await Comment.findOneAndUpdate(
      { _id: commentId, postId },
      { ...req.body },
      { new: true }
    );

    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    res.status(200).json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getComments, createComment, deleteComment, updateComment };
