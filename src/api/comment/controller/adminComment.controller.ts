import { NextFunction, Request, Response } from "express";
import { AdminCommentService } from "@/api/comment/service/adminComment.service.type";

// [관리자]
// 카테고리 목록 조회 - getComment
// 카테고리 생성 - createComment
// 카테고리 수정 - editComment
// 카테고리 삭제 - deleteComment

export default class AdminCommentController {
    private readonly _adminCommentService: AdminCommentService;
    constructor(_adminCommentService: AdminCommentService) {
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
        const { ...rest } = req.body;
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
}
