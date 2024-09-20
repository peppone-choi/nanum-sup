import mongoose from "mongoose";
import IComment from "../@types/comment.type";

const commentSchema = new mongoose.Schema<IComment>({
    commentId: {
        type: String, required: true
    },
    author: {type: mongoose.Schema.Types.ObjectId, ref: "User",
        required: true,
    },
    post: { type: String, required: true, length: 300
    }
});

export const MongooseComment = mongoose.model<IComment>(
    "Comment",
    commentSchema
);
