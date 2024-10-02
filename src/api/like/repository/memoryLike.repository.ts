import HttpException from "@/api/common/exceptions/http.exception";
import Like from "../model/like.model";
import { LikeRepository } from "./like.repository";

export default class MemoryLikeRepository implements LikeRepository {
  static index = 0;
  static readonly store: Map<string, ILike> = new Map();
  async getLike(likeId: string): Promise<ILike> {
    const like = MemoryLikeRepository.store.get(likeId);
    if (!like) {
      throw new HttpException(404, "좋아요를 찾을 수 없습니다.");
    }
    return like;
  }
  async createLike(user: IUser): Promise<ILike> {
    const like: ILike = new Like({
      id: (++MemoryLikeRepository.index).toString(),
      user,
    });
    MemoryLikeRepository.store.set(like.id, like);
    return like;
  }
  async deleteLike(likeId: string): Promise<void> {
    MemoryLikeRepository.store.delete(likeId);
    return;
  }
  async likedByUser(user: IUser, likeId: string): Promise<boolean> {
    const like = MemoryLikeRepository.store.get(likeId);
    if (!like) {
      throw new HttpException(404, "좋아요를 찾을 수 없습니다.");
    }
    return like.user.id === user.id;
  }
}
