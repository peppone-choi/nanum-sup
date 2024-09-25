import { NextFunction, Request, Response } from "express";
import LikeService from "../service/like.service.type";

export default class LikeController {
  private readonly _likeService: LikeService;
  constructor(_likeService: LikeService) {
    this._likeService = _likeService;
  }

  async getLikes(req: Request, res: Response, next: NextFunction) {
    try {
      const likes = await this._likeService.getLikes();
      res.send(likes);
    } catch (error) {
      next(error);
    }
  }

  async getLikesPost(req: Request, res: Response, next: NextFunction) {
    try {
      const postId = req.params.id;
      const likes = await this._likeService.getLikesPost(postId);
      res.send(likes);
    } catch (error) {
      next(error);
    }
  }

  async countLikesPostCount(req: Request, res: Response, next: NextFunction) {
    try {
      const postId = req.params.id;
      const count = await this._likeService.countLikesPost(postId);
      res.send(count);
    } catch (error) {
      next(error);
    }
  }

  async getLikesComment(req: Request, res: Response, next: NextFunction) {
    try {
      const commentId = req.params.id;
      const likes = await this._likeService.getLikesComment(commentId);
      res.send(likes);
    } catch (error) {
      next(error);
    }
  }

  async countLikesCommentCount(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const commentId = req.params.id;
      const count = await this._likeService.countLikesComment(commentId);
      res.send(count);
    } catch (error) {
      next(error);
    }
  }

  async createLike(req: Request, res: Response, next: NextFunction) {
    try {
      const { type, user, post, comment } = req.body.comment;
      const like = await this._likeService.createLike(
        type,
        user,
        post,
        comment
      );
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
