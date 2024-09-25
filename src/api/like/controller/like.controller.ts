import { NextFunction, Request, Response } from "express";
import LikeService from "../service/like.service.type";

export default class LikeController {
  private readonly _likeService: LikeService;
  constructor(_likeService: LikeService) {
    this._likeService = _likeService;
  }

  async getLikesPost(req: Request, res: Response, next: NextFunction) {
    try {
      res.send("getLikes");
    } catch (error) {
      next(error);
    }
  }

  async getLikesComment(req: Request, res: Response, next: NextFunction) {
    try {
      res.send("getLikesComment");
    } catch (error) {
      next(error);
    }
  }

  async createLike(req: Request, res: Response, next: NextFunction) {
    try {
      res.send("createLike");
    } catch (error) {
      next(error);
    }
  }

  async deleteLike(req: Request, res: Response, next: NextFunction) {
    try {
      res.send("deleteLike");
    } catch (error) {
      next(error);
    }
  }
}
