import mongoose from "mongoose";

const commentSchema = new mongoose.Schema<IComment>({
  id: {
    type: String,
    required: true,
  },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  post: { type: String, required: true, length: 300 },
});

export const MongooseComment = mongoose.model<IComment>(
  "Comment",
  commentSchema
);
