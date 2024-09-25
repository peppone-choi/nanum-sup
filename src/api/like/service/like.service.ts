import { NextFunction, Request, Response } from "express";
import LikeService from "./like.service.type";

export default class LikeServiceImpl implements LikeService {
  constructor() {}

  getLikesPost(req: Request, res: Response, next: NextFunction) {
    try {
      res.send("getLikesPost");
    } catch (error) {
      next(error);
    }
  }

  getLikesComment(req: Request, res: Response, next: NextFunction) {
    try {
      res.send("getLikesComment");
    } catch (error) {
      next(error);
    }
  }

  createLike(req: Request, res: Response, next: NextFunction) {
    try {
      res.send("createLike");
    } catch (error) {
      next(error);
    }
  }

  deleteLike(req: Request, res: Response, next: NextFunction) {
    try {
      res.send("deleteLike");
    } catch (error) {
      next(error);
    }
  }
}
