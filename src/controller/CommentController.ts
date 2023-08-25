import mongoose from "mongoose";
import { Comment, IComment } from "../models/CommentModel";
import { User } from "../models/UserModel";
import { Post } from "../models/Post.model";

import {
  CreateCommentMutation,
  UpdateCommentMutation,
  DeleteCommentMutation,
  GetCommentQuery,
} from "../interfaces/CommentInterface"; // Import Comment mutation interfaces

const createComment = async (comment: CreateCommentMutation["comment"]) => {
  const { text, user, post } = comment;

  // Make sure the author and post fields are valid ObjectId
  if (
    !mongoose.Types.ObjectId.isValid(user) ||
    !mongoose.Types.ObjectId.isValid(post)
  ) {
    throw new Error("Invalid author or post id");
  }

  try {
    const users = await User.findById(user); // Fetch the user object
    if (!users) {
      throw new Error("User not found");
    }

    const posts = await Post.findById(post); // Fetch the post object
    if (!posts) {
      throw new Error("Post not found");
    }

    const newComment = new Comment({ text, user, post });
    await newComment.save();

    const response = {
      id: newComment._id,
      text: newComment.text,
      user: users, // Assign the user object here
      post: posts,
    };

    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const updateComment = async (mutation: UpdateCommentMutation) => {
  const { id, comment } = mutation;
  const { text } = comment;

  // Make sure the comment ID is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid comment id");
  }

  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      id,
      { text: text },
      { new: true }
    );

    return updatedComment;
  } catch (error) {
    throw new Error("Error updating comment");
  }
};

const deleteComment = async (mutation: DeleteCommentMutation) => {
  const { id } = mutation;

  try {
    await Comment.findByIdAndDelete(new mongoose.Types.ObjectId(id));
  } catch (error: any) {
    console.log("ERROR: ", error.message);
    throw new Error("Failed to delete comment");
  }

  return "Comment deleted successfully!";
};

const getAllComments = async () => {
  //   return await Comment.find().populate("post").populate("user", "username");

  const comments = await Comment.find()
    .populate({ path: "user", select: "username" })
    .populate({ path: "post", select: "title" });

  console.log("comment: ", comments);

  return await Comment.find()
    .populate({ path: "user", select: "username" })
    .populate({ path: "post", select: "title" });
};

const getComment = async (query: GetCommentQuery) => {
  const { id } = query;
  return await Comment.findById(id);
};

export {
  createComment,
  updateComment,
  deleteComment,
  getAllComments,
  getComment,
};
