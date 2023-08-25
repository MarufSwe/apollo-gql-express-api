import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
} from "../controller/Post-controller";

import {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
} from "../controller/UserController";

import {
  createComment,
  updateComment,
  deleteComment,
  getAllComments,
  getComment,
} from "../controller/CommentController"; // Import Comment-related functions

import {
  CreatePostMutation,
  DeletePostMutation,
  GetPostQuery,
  UpdatePostMutation,
} from "../interfaces/PostInterfaces";

import {
  CreateUserMutation,
  UpdateUserMutation,
  DeleteUserMutation,
  GetUserQuery,
} from "../interfaces/UserInterface";

import {
  CreateCommentMutation, // Import Comment mutation interfaces
  UpdateCommentMutation,
  DeleteCommentMutation,
  GetCommentQuery,
} from "../interfaces/CommentInterface";

const resolvers = {
  Query: {
    getAllPosts: () => {
      return getAllPosts();
    },
    getPost: async (__: any, { id }: GetPostQuery) => {
      return getPost({ id });
    },

    getAllUsers: () => {
      return getAllUsers();
    },
    getUser: async (__: any, { id }: GetUserQuery) => {
      return getUser({ id });
    },

    getAllComments: () => {
      return getAllComments();
    },
    getComment: async (__: any, { id }: GetCommentQuery) => {
      return getComment({ id });
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

    createUser: async (__: any, { user }: CreateUserMutation) => {
      return createUser(user);
    },
    updateUser: async (__: any, { id, user }: UpdateUserMutation) => {
      return updateUser({ id, user });
    },
    deleteUser: async (__: any, { id }: DeleteUserMutation) => {
      return deleteUser({ id });
    },

    createComment: async (__: any, { comment }: CreateCommentMutation) => {
      console.log("Comment: ", comment);
      return createComment(comment);
    },
    updateComment: async (__: any, { id, comment }: UpdateCommentMutation) => {
      return updateComment({ id, comment });
    },
    deleteComment: async (__: any, { id }: DeleteCommentMutation) => {
      return deleteComment({ id });
    },
  },
};

export default resolvers;
