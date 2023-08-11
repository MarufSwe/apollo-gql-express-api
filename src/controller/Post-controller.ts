import mongoose from "mongoose";
import { Post, IPost } from "../models/Post.model";

import {
  GetPostQuery,
  CreatePostMutation,
  UpdatePostMutation,
  DeletePostMutation,
} from "../interfaces/PostInterface";

const createPost = async (post: CreatePostMutation["post"]) => {
  const { title, description } = post;
  console.log("title & description: ", title, description);
  const newPost = new Post({ title, description });
  await newPost.save();
  return newPost;
};

const getPost = async (query: GetPostQuery) => {
  const { id } = query;
  return await Post.findById(id);
};

const getAllPosts = async () => {
  return await Post.find();
};

const updatePost = async (mutation: UpdatePostMutation) => {
  const { id, post } = mutation;
  const updates: { title?: string; description?: string } = {};

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

const deletePost = async (mutation: DeletePostMutation) => {
  const { id } = mutation;

  try {
    await Post.findByIdAndDelete(new mongoose.Types.ObjectId(id));
  } catch (error: any) {
    console.log("ERROR: ", error.message);
    throw new Error("Failed to delete post");
  }

  return "Post deleted successfully!!";
};

export { createPost, getAllPosts, getPost, updatePost, deletePost };
