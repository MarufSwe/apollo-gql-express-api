import mongoose from "mongoose";
import { Post, IPost } from "../models/Post.model";
import { User, IUser } from "../models/UserModel";

import {
  CreateUserMutation,
  UpdateUserMutation,
  DeleteUserMutation,
  GetUserQuery,
} from "../interfaces/UserInterface";
import { ValidationError } from "apollo-server-express";

const createUser = async (user: CreateUserMutation["user"]) => {
  const { username, email, password } = user;

  const newUser = new User({ username, email, password });
  try {
    await newUser.save();
  } catch (error) {
    throw new ValidationError("Duplicate key");
  }
  return newUser;
};

const getAllUsers = async () => {
  return await User.find();
};

const getUser = async (query: GetUserQuery) => {
  const { id } = query;
  return await User.findById(id);
};

const updateUser = async (mutation: UpdateUserMutation) => {
  const { id, user } = mutation;
  const updates: { username?: string; email?: string; password?: string } = {};

  if (user.username !== undefined) {
    updates.username = user.username;
  }

  if (user.email !== undefined) {
    updates.email = user.email;
  }

  if (user.password !== undefined) {
    updates.password = user.password;
  }

  const updatedUser = await User.findByIdAndUpdate(
    new mongoose.Types.ObjectId(id),
    updates,
    { new: true }
  );

  return updatedUser;
};

const deleteUser = async (mutation: DeleteUserMutation) => {
  const { id } = mutation;

  try {
    await User.findByIdAndDelete(new mongoose.Types.ObjectId(id));
  } catch (error: any) {
    console.log("ERROR: ", error.message);
    throw new Error("Failed to delete user");
  }

  return "User deleted successfully!!";
};

export { createUser, getAllUsers, getUser, updateUser, deleteUser };
