const Comment = require("../models/commentModel");
const mongoose = require("mongoose");

// Get All Comments
const getComments = async (req, res) => {
  const postId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(postId)) {
    return res.status(404).json({ error: "Post not found" });
  }

  try {
    const comments = await Comment.find({ postId });
    res.status(200).json(comments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Create A Comment
const createComment = async (req, res) => {
  const { content } = req.body;
  const postId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(postId)) {
    return res.status(404).json({ error: "Post not found" });
  }

  try {
    const comment = await Comment.create({ content, postId });

    res.status(200).json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Comment
const deleteComment = async (req, res) => {
  const { postId, commentId } = req.params;

  console.log("postId:", postId);
  console.log("commentId:", commentId);

  try {
    const comment = await Comment.findOneAndDelete({ _id: commentId, postId });

    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    res.status(200).json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });
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
