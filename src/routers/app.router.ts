import { healthCheck } from "@/api/controllers/common.controller";
import express from "express";
// import CommentController from "..//app.controller";

const appRouter = express.Router();

const BASE_PATH = "/api";

// const COMMENT_ROUTES = {
//     CREATE_COMMENT: "/api/comment",

//     GET_COMMENT: "/api/comment",

//     EDIT_COMMENT: "/api/comment/:commentId",

//     DELETE_COMMENT: "/api/comment/:commentId",
// } as const;

// const commentController = new CommentController();

// appRouter.get(`/${BASE_PATH}`, healthCheck);

// appRouter.post(COMMENT_ROUTES.CREATE_COMMENT, commentController.createComment);

// appRouter.get(COMMENT_ROUTES.GET_COMMENT, commentController.getComment);

// appRouter.put(COMMENT_ROUTES.EDIT_COMMENT, commentController.editComment);

// appRouter.delete(
//     COMMENT_ROUTES.DELETE_COMMENT,
//     commentController.deleteComment
// );

export default appRouter;
