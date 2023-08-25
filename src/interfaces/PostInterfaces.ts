import { IUser } from "../models/UserModel";
import { Document, Types } from "mongoose";

interface GetPostQuery {
  id: string;
}

interface CreatePostMutation {
  post: {
    title: string;
    description?: string;
    owner: string; // You can use the User's id here
  };
}

interface UpdatePostMutation {
  id: string;
  post: {
    title?: string;
    description?: string;
  };
}

interface DeletePostMutation {
  id: string;
}
export {
  GetPostQuery,
  CreatePostMutation,
  UpdatePostMutation,
  DeletePostMutation,
};
