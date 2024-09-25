import { NextFunction, Request, Response } from "express";

export default class AdminLikeController {
  constructor() {}

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
