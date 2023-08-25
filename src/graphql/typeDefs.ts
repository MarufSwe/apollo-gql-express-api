import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    id: ID
    username: String
    email: String
    password: String
  }

  type Post {
    id: ID
    title: String
    description: String
    owner: String
  }

  type Comment {
    id: ID
    text: String
    user: User
    post: Post
  }

  input PostInput {
    title: String!
    description: String
    owner: String # Use the User's id here
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }

  input CommentInput {
    text: String!
    user: ID! # User's ID who made the comment
    post: ID! # Post's ID the comment is on
  }

  input UpdateUserInput {
    username: String
    email: String
    password: String
  }

  input UpdateCommentInput {
    text: String
  }

  type Query {
    getAllPosts: [Post]
    getPost(id: ID): Post

    getAllUsers: [User]
    getUser(id: ID!): User

    getAllComments: [Comment]
    getComment(id: ID!): Comment
  }

  type Mutation {
    createPost(post: PostInput): Post
    updatePost(id: ID, post: PostInput): Post
    deletePost(id: ID): String

    createUser(user: UserInput): User
    updateUser(id: ID!, user: UpdateUserInput): User
    deleteUser(id: ID!): String

    createComment(comment: CommentInput): Comment
    updateComment(id: ID!, comment: UpdateCommentInput): Comment
    deleteComment(id: ID!): String
  }
`;

export default typeDefs;
