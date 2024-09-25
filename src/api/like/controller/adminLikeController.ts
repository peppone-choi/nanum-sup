import { NextFunction, Request, Response } from "express";
import LikeService from "../service/like.service.type";

export default class AdminLikeController {
  private readonly _likeService: LikeService;
  constructor(_LikeService: LikeService) {
    this._likeService = _LikeService;
  }

  async getLikes(req: Request, res: Response, next: NextFunction) {
    try {
      res.send("getLikes");
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
