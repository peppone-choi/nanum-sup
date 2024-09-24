import { NextFunction, Request, Response } from "express";
import { CommentService } from "../service/comment.service.type";

export default class AdminCommentViewController {
    constructor(_commentService: CommentService) {
        this.commentListPage = this.commentListPage.bind(this);
        this.commentDetailPage = this.commentDetailPage.bind(this);
    }

    /** 댓글 생성 페이지 */
    async commentListPage(req: Request, res: Response, next: NextFunction) {
        res.render("admin/comment/commentList");
    }

    /** 댓글 수정 페이지 */
    async commentDetailPage(req: Request, res: Response, next: NextFunction) {
        res.render("admin/comment/commentDetail");
    }
}
