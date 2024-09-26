import { NextFunction, Request, Response } from "express";
import LikeResponseDto from "../dto/likeResponse.dto";

export default interface LikeService {
  getLikes(): Promise<LikeResponseDto[]>;
  getLikesPost(postId: string): Promise<LikeResponseDto[]>;
  getLikesComment(commentId: string): Promise<LikeResponseDto[]>;
  createLike(
    type: "post" | "comment",
    user: IUser,
    post?: IPost,
    comment?: IComment
  ): Promise<LikeResponseDto>;
  deleteLike(likeId: string): Promise<void>;
  countLikesPost(postId: string): Promise<number>;
  countLikesComment(commentId: string): Promise<number>;
}
