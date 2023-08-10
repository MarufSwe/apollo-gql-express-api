import mongoose from "mongoose";

interface IPost {
  title: string;
  description?: string;
}

const PostSchema = new mongoose.Schema<IPost>({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },
});

const Post = mongoose.model<IPost>("post", PostSchema);

// module.exports = Post;
export { IPost, Post };
