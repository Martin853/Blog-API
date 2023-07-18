const Post = require("../models/postModel");
const mongoose = require("mongoose");

// Get All Posts
const getPosts = async (req, res) => {
  const posts = await Post.find({}).sort({ createdAt: -1 });

  res.status(200).json(posts);
};

// Get A Single Post
const getPost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: `Post doesn't exist` });
  }

  const post = await Post.findById(id);

  if (!post) {
    return res.status(404).json({ error: `Post doesn't exist` });
  }

  res.status(200).json(post);
};

// Create A New Post
const createPost = async (req, res) => {
  const { title, description, image } = req.body;

  try {
    const post = await Post.create({ title, description, image });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete A Post
const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: `Post doesn't exist` });
  }

  const post = await Post.findOneAndDelete({ _id: id });

  if (!post) {
    return res.status(404).json({ error: `Post doesn't exist` });
  }

  res.status(200).json(post);
};

//Update A Post
const updatePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: `Post doesn't exist` });
  }

  const post = await Post.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!post) {
    return res.status(404).json({ error: `Post doesn't exist` });
  }

  res.status(200).json(post);
};

module.exports = { getPosts, getPost, createPost, deletePost, updatePost };
