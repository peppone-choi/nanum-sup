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
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  attachmentsUrl: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  pictures: {
    type: [String],
    default: [],
  },
  video: {
    type: String,
    default: "",
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Like",
    },
  ],
  // updatedAt: {
  //   type: Date,
  //   default: Date.now,
  // },

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
