import { NextFunction, Request, Response } from "express";
import { CommentService } from "../service/comment.service.type";

export default class AdminCommentViewController {
    constructor(_commentService: CommentService) {
        this.commentWritePage = this.commentWritePage.bind(this);
        this.commentEditPage = this.commentEditPage.bind(this);
    }

    /** 댓글 생성 페이지 */
    async commentWritePage(req: Request, res: Response, next: NextFunction) {
        res.render("admin/comment/commentWrite");
    }

    /** 댓글 수정 페이지 */
    async commentEditPage(req: Request, res: Response, next: NextFunction) {
        res.render("admin/comment/commentEdit");
    }
}
