import { NextFunction, Request, Response } from "express";

export default class FollowController {
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
