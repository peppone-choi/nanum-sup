import { NextFunction, Request, Response } from "express";
import LikeService from "../service/like.service.type";

export default class LikeController {
  private readonly _likeService: LikeService;
  constructor(_likeService: LikeService) {
    this._likeService = _likeService;
  }

  async createLike(req: Request, res: Response, next: NextFunction) {
    try {
      const user = req.user.userId;

      const like = await this._likeService.createLike(user);
      res.send(like);
    } catch (error) {
      next(error);
    }
  }

  async deleteLike(req: Request, res: Response, next: NextFunction) {
    try {
      const likeId = req.params.id;
      const like = await this._likeService.deleteLike(likeId);
      res.send(like);
    } catch (error) {
      next(error);
    }
  }
}
