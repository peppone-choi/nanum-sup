import { NextFunction, Request, Response } from "express";
import { FollowService } from "../service/follow.service.type";

export default class AdminFollowController {
  private readonly _followService: FollowService;
  constructor(_followService: FollowService) {
    this._followService = _followService;
    this.getFollows = this.getFollows.bind(this);
    this.getFollowingByUserId = this.getFollowingByUserId.bind(this);
    this.getFollowerByUserId = this.getFollowerByUserId.bind(this);
    this.createFollow = this.createFollow.bind(this);
    this.deleteFollow = this.deleteFollow.bind(this);
  }
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
