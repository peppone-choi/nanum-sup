import mongoose from "mongoose";

const profileSchema = new mongoose.Schema<IProfile>({
  nickname: {
    type: String,
    length: 10,
  },
  bio: {
    type: String,
    length: 200,
  },
  thumbnail: {
    type: String,
  },
  headerThumbnail: {
    type: String,
  },
});

export const MongooseProfile = mongoose.model<IProfile>(
  "Profile",
  profileSchema
);
