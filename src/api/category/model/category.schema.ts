import mongoose from "mongoose";

const categorySchema = new mongoose.Schema<ICategory>({
  title: {
    type: String,
    required: true,
    length: 20,
  },
  admin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  subAdmin: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

export const MongooseCategory = mongoose.model<ICategory>(
  "Category",
  categorySchema
);
