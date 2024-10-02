import express from "express";
import CommentController from "@/api/comment/controller/comment.controller";
import CommentServiceImpl from "@/api/comment/service/comment.service";
import { MemoryCommentRepository } from "@/api/comment/repository/memoryComment.repository";
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/routers";
import { Mongoose } from "mongoose";
import MongooseUserRepository from "@/api/user/repository/mongooseUser.repository";
import { MongoosePostRepository } from "@/api/posts/repository/mongoosePost.repository";
import { MongooseCommentRepository } from "../repository/mongooseComment.repository";
import { authUserMiddleware } from "@/api/common/middlewares/authUser.middleware";

const commentRouter = express.Router();

const COMMENT_ROUTES = {
  CREATE_COMMENT: "/api/comment",
  CREATE_COMMENT_REPLY: "/api/comment/:commentId",
  GET_COMMENTS: "/api/comment/list/:postId",
  GET_COMMENT: "/api/comment/:commentId",
  EDIT_COMMENT: "/api/comment/:commentId",

  DELETE_COMMENT: "/api/comment/:commentId",
} as const;

const commentController = new CommentController(new CommentServiceImpl(new MongooseCommentRepository(), new MongooseUserRepository(), new MongoosePostRepository()));

commentRouter.post(extractPath(COMMENT_ROUTES.CREATE_COMMENT, ROUTES_INDEX.COMMENT_API), authUserMiddleware, commentController.createComment);

commentRouter.post(extractPath(COMMENT_ROUTES.CREATE_COMMENT_REPLY, ROUTES_INDEX.COMMENT_API), authUserMiddleware, commentController.createCommentReply);

commentRouter.get(extractPath(COMMENT_ROUTES.GET_COMMENT, ROUTES_INDEX.COMMENT_API), authUserMiddleware, commentController.getComment);

commentRouter.put(extractPath(COMMENT_ROUTES.EDIT_COMMENT, ROUTES_INDEX.COMMENT_API), authUserMiddleware, commentController.editComment);

commentRouter.delete(extractPath(COMMENT_ROUTES.DELETE_COMMENT, ROUTES_INDEX.COMMENT_API), authUserMiddleware, commentController.deleteComment);

export default commentRouter;
