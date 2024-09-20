import type { Request, Response, NextFunction } from "express";

export default class PostitController {
    constructor(private readonly _commentController: commentService) {
        this.createComment = this.createComment.bind(this);
        this.getComment = this.getComment.bind(this);
        this.editComment = this.editComment.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
    }
    async createComment(req: Request, res: Response, next: NextFunction){
    res.send("POST /api/comment")
    }
}