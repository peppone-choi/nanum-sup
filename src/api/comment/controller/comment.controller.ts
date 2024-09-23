import { NextFunction, Request, Response } from "express";
import { CommentService } from "@/api/comment/service/comment.service.type";


export default class CommentController {

    constructor(_commentService: CommentService) {

        this.createComment = this.createComment.bind(this);
        this.getComment = this.getComment.bind(this);
        this.editComment = this.editComment.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
    }
    async getComment(req: Request, res: Response, next: NextFunction) {
        try {
            res.send("GET /api/comment")
        } catch (error) {
            next(error);
        }
    }
    async createComment(req: Request, res: Response, next: NextFunction){
        try {
            res.send("POST /api/comment")
        } catch (error) {
            next(error);
        }
    }
    async editComment(req: Request, res: Response, next: NextFunction){
        try {
            res.send("PUT /api/comment/:commentId")
        } catch (error) {
            next(error);
        }
    }
    async deleteComment(req: Request, res: Response, next: NextFunction){
        try {
            res.send("DELETE /api/comment/:commentId")
        } catch (error) {
            next(error);
        }
    }
}