import mongoose, { Schema } from "mongoose";
import { IUser } from "./UserModel"; // Import the IUser interface
import { IPost } from "./Post.model";

interface IComment {
  text: string;
  user: IUser["_id"];
  post: IPost["_id"];
}

const CommentSchema = new Schema<IComment>({
  text: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  post: {
    type: Schema.Types.ObjectId,
    ref: "Post", // Reference the Post model
    required: true,
  },
});

const Comment = mongoose.model<IComment>("Comment", CommentSchema);

export { IComment, Comment };
