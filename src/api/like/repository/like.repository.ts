export interface LikeRepository {
  getLike(likeId: string): Promise<ILike>;
  createLike(user: IUser): Promise<ILike>;
  deleteLike(likeId: string): Promise<void>;
  likedByUser(userId: IUser, likeId: string): Promise<boolean>;
}
