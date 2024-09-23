import express from "express";
import CommentController from "@/api/comment/controller/comment.controller";
import CommentServiceImpl from "@/api/comment/service/comment.service";
import { MemoryCommentRepository } from "@/api/comment/repository/memoryComment.repository";
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/routers";

const commentRouter = express.Router();

const COMMENT_ROUTES = {

    CREATE_COMMENT: '/api/comment',

    GET_COMMENT: '/api/comment',

    EDIT_COMMENT: '/api/comment/:commentId',

    DELETE_COMMENT: '/api/comment/:commentId',
} as const;

const commentController = new CommentController(
    new CommentServiceImpl(new MemoryCommentRepository())
);

commentRouter.post(
    extractPath(COMMENT_ROUTES.CREATE_COMMENT, ROUTES_INDEX.COMMENT_API),
    commentController.createComment
);

commentRouter.get(
    extractPath(COMMENT_ROUTES.GET_COMMENT, ROUTES_INDEX.COMMENT_API),
    commentController.getComment
);

commentRouter.put(
    extractPath(COMMENT_ROUTES.EDIT_COMMENT, ROUTES_INDEX.COMMENT_API),
    commentController.editComment
);

commentRouter.delete(
    extractPath(COMMENT_ROUTES.DELETE_COMMENT, ROUTES_INDEX.COMMENT_API),
    commentController.deleteComment
);

export default commentRouter;
