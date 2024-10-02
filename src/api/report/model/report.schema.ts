import mongoose from "mongoose";

const reportSchema = new mongoose.Schema<IReport>(
  {
    reporter: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    reported: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    reason: { type: String, required: true },
    reportedPost: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    reportedComment: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
  },
  { timestamps: true }
);

export const MongooseReport = mongoose.model<IReport>("Report", reportSchema);
