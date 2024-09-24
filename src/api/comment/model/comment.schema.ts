import mongoose from "mongoose";

const commentSchema = new mongoose.Schema<IComment>({
  id: {
    type: String,
    required: true,
  },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
  parent: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
  depth: { type: Number, required: true, default: 0 },
});

export const MongooseComment = mongoose.model<IComment>(
  "Comment",
  commentSchema
);
