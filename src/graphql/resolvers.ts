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

    updatePost: async (__: any, { post }: { post: any }) => {
      return updatePost(post);
    },

    deletePost: async (__: any, { post }: { post: any }) => {
      return deletePost(post);
    },
  },
};

// module.exports = resolvers;
export default resolvers;
