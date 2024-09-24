import { NextFunction, Request, Response } from "express";
import { CommentService } from "@/api/comment/service/comment.service.type";

export default class CommentController {
  private readonly _commentService: CommentService;
  constructor(_commentService: CommentService) {
    this._commentService = _commentService;
    this.createComment = this.createComment.bind(this);
    this.getComment = this.getComment.bind(this);
    this.editComment = this.editComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.createCommentReply = this.createCommentReply.bind(this);
  }
  async getComment(req: Request, res: Response, next: NextFunction) {
    try {
      const comment = await this._commentService.getComment();
      res.send(comment);
    } catch (error) {
      next(error);
    }
  }
  async createComment(req: Request, res: Response, next: NextFunction) {
    try {
      const comment = await this._commentService.createComment(req.body);
      res.status(201).send(comment);
    } catch (error) {
      next(error);
    }
  }
  async createCommentReply(req: Request, res: Response, next: NextFunction) {
    try {
      const comment = await this._commentService.createCommentReply(
        req.params.commentId,
        req.body
      );
      res.status(201).send(comment);
    } catch (error) {
      next(error);
    }
  }
  async editComment(req: Request, res: Response, next: NextFunction) {
    try {
      const comment = await this._commentService.editComment(
        req.params.commentId,
        req.body
      );
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
  async deleteComment(req: Request, res: Response, next: NextFunction) {
    try {
      const comment = await this._commentService.deleteComment(
        req.params.commentId
      );
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
