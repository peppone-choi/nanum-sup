import { NextFunction, Request, Response } from "express";

export default interface LikeService {
  getLikes: () => void;
  getLikesPost: (postId: string) => void;
  getLikesComment: (commentId: string) => void;
  createLike: () => void;
  deleteLike: (likeId: string) => void;
}
