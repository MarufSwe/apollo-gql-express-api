const Post = require("../models/Post.model");

const createPost = async (args) => {
  const { title, description } = args.post;
  console.log("title & description: ", title, description);
  const post = new Post({ title, description });
  await post.save();
  return post;
};

const getPost = async (id) => {
  return await Post.findById(id);
};

const getAllPosts = async () => {
  return await Post.find();
};

const updatePost = async (args) => {
  const { id } = args;
  const { title, description } = args.post;
  const updates = {};
  if (title !== undefined) {
    updates.title = title;
  }
  if (description !== undefined) {
    updates.description = description;
  }
  const post = await Post.findByIdAndUpdate(
    id,
    // { title, description },
    updates,
    { new: true }
  );
  return post;
};

const deletePost = async (args) => {
  const { id } = args;
  await Post.findByIdAndDelete(id);
  return "post deleted successfully!!";
};

module.exports = { createPost, getAllPosts, getPost, updatePost, deletePost };
