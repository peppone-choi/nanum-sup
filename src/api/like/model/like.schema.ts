import mongoose from "mongoose";

const likeSchema = new mongoose.Schema<ILike>({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const MongooseLike = mongoose.model<ILike>("Like", likeSchema);
