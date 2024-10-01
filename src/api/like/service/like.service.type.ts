import { NextFunction, Request, Response } from "express";
import LikeResponseDto from "../dto/likeResponse.dto";

export default interface LikeService {
  createLike(userId: string): Promise<LikeResponseDto>;
  deleteLike(likeId: string): Promise<void>;
  likedByUser(userId: string, likeId: string): Promise<boolean>;
}
