import mongoose from "mongoose";


const postSchema = new mongoose.Schema<IPost>({
  title: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  content: {
    type: String,
    required: true,
    trim: true,
    maxLength: 200,
  },
  // author: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    }
  ],
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
  // updatedAt: {
  //   type: Date,
  //   default: Date.now,
  // },
});


export const MongoosePost = mongoose.model<IPost>("Post", postSchema);