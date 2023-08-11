import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
} from "../controller/Post-controller";

import {
  CreatePostMutation,
  DeletePostMutation,
  GetPostQuery,
  UpdatePostMutation,
} from "../interfaces/PostInterface";

const resolvers = {
  Query: {
    hello: () => {
      return "Hello world;";
    },
    getAllPosts: () => {
      return getAllPosts();
    },
    getPost: async (__: any, { id }: GetPostQuery) => {
      return getPost({ id });
    },
  },
  Mutation: {
    createPost: async (__: any, { post }: CreatePostMutation) => {
      return createPost(post);
    },
    updatePost: async (__: any, { id, post }: UpdatePostMutation) => {
      return updatePost({ id, post });
    },
    deletePost: async (__: any, { id }: DeletePostMutation) => {
      return deletePost({ id });
    },
  },
};

export default resolvers;
