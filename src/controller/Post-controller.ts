import mongoose from "mongoose";
import { Post, IPost } from "../models/Post.model";

const createPost = async (post: any) => {
  const { title, description } = post;
  console.log("title & description: ", title, description);
  const newPost = new Post({ title, description });
  await newPost.save();
  return newPost;
};

const getPost = async (id: any) => {
  return await Post.findById(id);
};

const getAllPosts = async () => {
  return await Post.find();
};

const updatePost = async (id: string, post: any) => {
  const updates: { title?: string; description?: string } = {};

  console.log("Test: ", id, post);

  if (post.title !== undefined) {
    updates.title = post.title;
  }

  if (post.description !== undefined) {
    updates.description = post.description;
  }

  const updatedPost = await Post.findByIdAndUpdate(
    new mongoose.Types.ObjectId(id),
    updates,
    { new: true }
  );

  return updatedPost;
};

const deletePost = async (id: string) => {
  try {
    await Post.findByIdAndDelete(new mongoose.Types.ObjectId(id));
  } catch (error: any) {
    console.log("ERROR: ", error.message);
    return "Failed";
  }
  return "post deleted successfully!!";
};

export { createPost, getAllPosts, getPost, updatePost, deletePost };
