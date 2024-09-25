import mongoose from "mongoose";

const likeSchema = new mongoose.Schema<ILike>({
  type: {
    type: String,
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  comment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const MongooseLike = mongoose.model<ILike>("Like", likeSchema);
