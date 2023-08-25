import mongoose, { Schema, Document, Types } from "mongoose";
import { IUser } from "./UserModel";
// import { IComment } from "./CommentModel";

interface IPost extends Document {
  title: string;
  description?: string;
  owner: IUser["_id"]; // Reference to the User who owns the post
}

const PostSchema = new mongoose.Schema<IPost>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
});

const Post = mongoose.model<IPost>("Post", PostSchema);

export { IPost, Post };
