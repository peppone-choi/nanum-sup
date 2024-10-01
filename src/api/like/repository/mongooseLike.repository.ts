import path from "path";
import { MongooseLike } from "../model/like.schema";
import { LikeRepository } from "./like.repository";
import HttpException from "@/api/common/exceptions/http.exception";

export default class MongooseLikeRepository implements LikeRepository {
  async getLike(likeId: string): Promise<ILike> {
    const like = await MongooseLike.findById(likeId);
    if (!like) {
      throw new HttpException(404, "좋아요를 찾을 수 없습니다.");
    }
    return like;
  }
  async createLike(user: IUser): Promise<ILike> {
    const like = new MongooseLike({
      user,
    });
    return await like.save();
  }
  async deleteLike(likeId: string): Promise<void> {
    await MongooseLike.findByIdAndDelete(likeId);
    return;
  }
  async likedByUser(userId: IUser, likeId: string): Promise<boolean> {
    const like = await MongooseLike.findById(likeId);
    return like?.user === userId;
  }
}
