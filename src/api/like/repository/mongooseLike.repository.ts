import path from "path";
import { MongooseLike } from "../model/like.schema";
import { LikeRepository } from "./like.repository";

export default class MongooseLikeRepository implements LikeRepository {
  async getLikes(): Promise<ILike[]> {
    const likes = await MongooseLike.find();
    return likes;
  }
  async getLikesPost(postId: string): Promise<ILike[]> {
    const likes = await MongooseLike.find({
      "post.id": postId,
    })
      .populate("post")
      .populate({
        path: "user",
        populate: {
          path: "profile",
        },
      });
    return likes;
  }
  async getLikesComment(commentId: string): Promise<ILike[]> {
    const likes = await MongooseLike.find({
      "comment.id": commentId,
    })
      .populate("comment")
      .populate({
        path: "user",
        populate: {
          path: "profile",
        },
      });
    return likes;
  }
  async createLike(type: "post" | "comment", user: IUser, post?: IPost, comment?: IComment): Promise<ILike> {
    const like = new MongooseLike({
      type,
      user,
      post,
      comment,
    });
    return await like.save();
  }
  async deleteLike(likeId: string): Promise<void> {
    await MongooseLike.findByIdAndDelete(likeId);
    return;
  }
  async countLikesPost(postId: string): Promise<number> {
    const likes = await MongooseLike.find({
      "post.id": postId,
    })
      .populate("post")
      .populate({
        path: "user",
        populate: {
          path: "profile",
        },
      });
    return likes.length;
  }
  async countLikesComment(commentId: string): Promise<number> {
    const likes = await MongooseLike.find({
      "comment.id": commentId,
    })
      .populate("comment")
      .populate({
        path: "user",
        populate: {
          path: "profile",
        },
      });
    return likes.length;
  }
}
