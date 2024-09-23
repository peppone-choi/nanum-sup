import mongoose from "mongoose";

const userSchema = new mongoose.Schema<IUser>({
  accountId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
  },
  role: {
    type: String,
    required: true,
    enum: ["admin", "user"],
  },
});

export const MongooseUser = mongoose.model<IUser>("User", userSchema);
