import mongoose from "mongoose";

const commentSchema = new mongoose.Schema<IComment>({
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  parent: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
  depth: { type: Number, required: true, default: 0 },
});

export const MongooseComment = mongoose.model<IComment>("Comment", commentSchema);
