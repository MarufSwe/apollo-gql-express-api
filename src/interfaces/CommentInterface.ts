import { IUser } from "../models/UserModel"; // Import the IUser interface
import { IPost } from "../models/Post.model";

interface CreateCommentMutation {
  comment: {
    text: string;
    user: IUser["_id"];
    post: IPost["_id"];
  };
}

interface UpdateCommentMutation {
  id: string;
  comment: {
    text?: string;
  };
}

interface DeleteCommentMutation {
  id: string;
}

interface GetCommentQuery {
  id: string;
}

export {
  CreateCommentMutation,
  UpdateCommentMutation,
  DeleteCommentMutation,
  GetCommentQuery,
};
