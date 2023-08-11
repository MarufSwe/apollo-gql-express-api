import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
} from "../controller/Post-controller";
// const Post = require("../models/Post.model");

const resolvers = {
  // Query
  Query: {
    hello: () => {
      return "Hello world;";
    },

    getAllPosts: () => {
      return getAllPosts();
    },

    getPost: async (__: any, { id }: { id: any }) => {
      return getPost(id);
    },
  },

  // Mutation
  Mutation: {
    createPost: async (__: any, { post }: { post: any }) => {
      return createPost(post);
    },

    updatePost: async (__: any, { id, post }: { id: string; post: any }) => {
      // updatePost: async (__: any, updatePost: {id: string, post: {title: string}}) => {
      return updatePost(id, post);
    },

    deletePost: async (__: any, id: string) => {
      return deletePost(id);
    },
  },
};

// module.exports = resolvers;
export default resolvers;
