import { NextFunction, Request, Response } from "express";
import { CommentService } from "@/api/comment/service/comment.service.type";

// [관리자]
// 댓글 목록 조회 - getComment
// 댓글 생성 - createComment
// 댓글 수정 - editComment
// 댓글 삭제 - deleteComment

export default class AdminCommentController {
  private readonly _adminCommentService: CommentService;
  constructor(_adminCommentService: CommentService) {
    this._adminCommentService = _adminCommentService;

    this.getComment = this.getComment.bind(this);
    this.createComment = this.createComment.bind(this);
    this.editComment = this.editComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  async getComment(
    req: Request<
      adminGetCommentRequest["path"],
      adminGetCommentResponse,
      adminGetCommentRequest["body"],
      adminGetCommentRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    try {
      const comment = await this._adminCommentService.getComment();
      res.send(comment);
    } catch (error) {
      next(error);
    }
  }

  async createComment(
    req: Request<
      adminCreateCommentRequest["path"],
      adminCreateCommentResponse,
      adminCreateCommentRequest["body"],
      adminCreateCommentRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    try {
      const newComment = await this._adminCommentService.createComment(
        req.body
      );
      res.status(201).send(newComment);
    } catch (error) {
      next(error);
    }
  }

  async editComment(
    req: Request<
      adminEditCommentRequest["path"],
      adminEditCommentResponse,
      adminEditCommentRequest["body"],
      adminEditCommentRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { commentId } = req.params;
    try {
      await this._adminCommentService.editComment(commentId, req.body);
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }

  async deleteComment(
    req: Request<
      adminDeleteCommentRequest["path"],
      adminDeleteCommentResponse,
      adminDeleteCommentRequest["body"],
      adminDeleteCommentRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { commentId } = req.params;
    try {
      await this._adminCommentService.deleteComment(commentId);
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }

  async getComments(
    req: Request<
      adminGetCommentsRequest["path"],
      adminGetCommentsResponse,
      adminGetCommentsRequest["body"],
      adminGetCommentsRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { postId } = req.params;
    try {
      const comments = await this._adminCommentService.getComments(postId);
      res.send(comments);
    } catch (error) {
      next(error);
    }
  }
}
