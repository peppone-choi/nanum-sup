import mongoose from "mongoose";

(async () => {
  try {
    await mongoose.connect(
      // `[커넥션 URI]`
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}`
    );

    await mongoose.set("debug", true);

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
})();