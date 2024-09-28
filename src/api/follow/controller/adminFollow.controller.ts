import { NextFunction, Request, Response } from "express";

export default class AdminFollowController {
  async getFollows(req: Request, res: Response, next: NextFunction) {
    try {
      res.send("getFollows");
    } catch (error) {
      next(error);
    }
  }
  async getFollowingByUserId(req: Request, res: Response, next: NextFunction) {
    try {
      res.send("getFollowingByUserId");
    } catch (error) {
      next(error);
    }
  }
  async getFollowerByUserId(req: Request, res: Response, next: NextFunction) {
    try {
      res.send("getFollowerByUserId");
    } catch (error) {
      next(error);
    }
  }
  async createFollow(req: Request, res: Response, next: NextFunction) {
    try {
      res.send("createFollow");
    } catch (error) {
      next(error);
    }
  }
  async deleteFollow(req: Request, res: Response, next: NextFunction) {
    try {
      res.send("deleteFollow");
    } catch (error) {
      next(error);
    }
  }
}
