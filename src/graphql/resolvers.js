const {
  getPost,
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
} = require("../controller/Post-controller");

const Post = require("../models/Post.model");

const resolvers = {
  Query: {
    hello: () => {
      return "Hello world;";
    },

    getAllPosts: () => {
      // return await Post.find();
      return getAllPosts();
    },

    getPost: async (_parent, { id }, _context, _info) => {
      // return await Post.findById(id);
      return getPost(id);
    },
  },

  Mutation: {
    createPost: async (parent, args, context, info) => {
      // const { title, description } = args.post;
      // console.log("title & description: ", title, description);
      // const post = new Post({ title, description });
      // await post.save();
      // return post;
      return createPost(args);
    },

    updatePost: async (parent, args, context, info) => {
      // const { id } = args;
      // const { title, description } = args.post;
      // const updates = {};
      // if (title !== undefined) {
      //   updates.title = title;
      // }
      // if (description !== undefined) {
      //   updates.description = description;
      // }
      // const post = await Post.findByIdAndUpdate(
      //   id,
      //   // { title, description },
      //   updates,
      //   { new: true }
      // );
      // return post;

      return updatePost(args);
    },

    deletePost: async (parent, args, context, info) => {
      // const { id } = args;
      // await Post.findByIdAndDelete(id);
      // return "post deleted successfully!!";
      return deletePost(args);
    },
  },
};

module.exports = resolvers;
