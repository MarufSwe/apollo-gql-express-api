import { Post, IPost } from "../models/Post.model";

const createPost = async (post: IPost) => {
  const { title, description } = post;
  const newPost = new Post({ title, description });
  await newPost.save();
  return newPost;
};

const getPost = async (id: string) => {
  return await Post.findById(id);
};

const getAllPosts = async () => {
  return await Post.find();
};

type UpdateArgs = {
  id: string;
  post: {
    title?: string;
    description?: string;
  };
};

const updatePost = async (args: UpdateArgs) => {
  const { id, post } = args;
  const updates: { title?: string; description?: string } = {};

  if (post.title !== undefined) {
    updates.title = post.title;
  }

  if (post.description !== undefined) {
    updates.description = post.description;
  }

  const updatedPost = await Post.findByIdAndUpdate(id, updates, { new: true });
  return updatedPost;
};

const deletePost = async (id: string) => {
  await Post.findByIdAndDelete(id);
  return "post deleted successfully!!";
};

// const createPost = async (post: any) => {
//   const { title, description } = post;
//   console.log("title & description: ", title, description);
//   const newPost = new Post({ title, description });
//   await newPost.save();
//   return newPost;
// };

// const getPost = async (id: any) => {
//   return await Post.findById(id);
// };

// const getAllPosts = async () => {
//   return await Post.find();
// };

// type UpdateArgs = {
//   id: string;
//   post: {
//     title?: string;
//     description?: string;
//   };
// };

// const updatePost = async (args: UpdateArgs) => {
//   const { id, post } = args;
//   const updates: { title?: string; description?: string } = {};

//   if (post.title !== undefined) {
//     updates.title = post.title;
//   }

//   if (post.description !== undefined) {
//     updates.description = post.description;
//   }

//   const updatedPost = await Post.findByIdAndUpdate(id, updates, { new: true });

//   return updatedPost;
// };

// const deletePost = async (args: any) => {
//   const { id } = args;
//   await Post.findByIdAndDelete(id);
//   return "post deleted successfully!!";
// };

// module.exports = { createPost, getAllPosts, getPost, updatePost, deletePost };
export { createPost, getAllPosts, getPost, updatePost, deletePost };
