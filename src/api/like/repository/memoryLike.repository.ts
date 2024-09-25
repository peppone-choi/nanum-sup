import Like from "../model/like.model";
import { LikeRepository } from "./like.repository";

export default class MemoryLikeRepository implements LikeRepository {
  static index = 0;
  static readonly store: Map<string, ILike> = new Map();

  async getLikes(): Promise<ILike[]> {
    const values = Array.from(MemoryLikeRepository.store.values());
    return values;
  }
  async getLikesPost(postId: string): Promise<ILike[]> {
    const values = Array.from(MemoryLikeRepository.store.values()).filter(
      (like) => like.post?.id === postId
    );
    return values;
  }
  async getLikesComment(commentId: string): Promise<ILike[]> {
    const values = Array.from(MemoryLikeRepository.store.values()).filter(
      (like) => like.comment?.id === commentId
    );
    return values;
  }
  async createLike(
    type: "post" | "comment",
    user: IUser,
    post?: IPost,
    comment?: IComment
  ): Promise<ILike> {
    const like: ILike = new Like({
      id: (++MemoryLikeRepository.index).toString(),
      type,
      post,
      comment,
      user,
    });
    MemoryLikeRepository.store.set(like.id, like);
    return like;
  }
  async deleteLike(likeId: string): Promise<void> {
    MemoryLikeRepository.store.delete(likeId);
    return;
  }
  async countLikesPost(postId: string): Promise<number> {
    const values = Array.from(MemoryLikeRepository.store.values()).filter(
      (like) => like.post?.id === postId
    );
    return values.length;
  }
  async countLikesComment(commentId: string): Promise<number> {
    const values = Array.from(MemoryLikeRepository.store.values()).filter(
      (like) => like.comment?.id === commentId
    );
    return values.length;
  }
}
