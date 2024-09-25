export interface LikeRepository {
  getLikes(): Promise<ILike[]>;
  getLikesPost(postId: string): Promise<ILike[]>;
  getLikesComment(commentId: string): Promise<ILike[]>;
  createLike(
    type: "post" | "comment",
    user: IUser,
    post?: IPost,
    comment?: IComment
  ): Promise<ILike>;
  deleteLike(likeId: string): Promise<void>;
  countLikesPost(postId: string): Promise<number>;
  countLikesComment(commentId: string): Promise<number>;
}
