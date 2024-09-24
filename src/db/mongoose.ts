import mongoose from "mongoose";

const mongodbUri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}`;

export const db = mongoose.createConnection(mongodbUri).asPromise();

(async () => {
  try {
    console.log(
      process.env.MONGODB_USER,
      process.env.MONGODB_PASSWORD,
      process.env.MONGODB_CLUSTER
    );
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}`
    );

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
})();
