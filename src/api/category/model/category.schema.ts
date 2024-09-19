import mongoose from "mongoose";

const categoeySchema = new mongoose.Schema<ICategory>({
    title: {
        type: String,
        required: true,
        length: 20,
    },
});

export const MongooseCategory = mongoose.model<ICategory>(
    "Category",
    categoeySchema
);
