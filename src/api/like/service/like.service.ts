import { NextFunction, Request, Response } from "express";
import LikeService from "./like.service.type";

export default class LikeServiceImpl implements LikeService {
  constructor() {}

  async getLikes() {}

  async getLikesPost(postId: string) {}

  async getLikesComment(commentId: string) {}

  async createLike() {}

  async deleteLike(likeId: string) {}
}
