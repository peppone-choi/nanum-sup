import express from "express";
import AdminCommentController from "@/api/comment/controller/adminComment.controller";
import CommentServiceImpl from "@/api/comment/service/comment.service";
import { MemoryCommentRepository } from "@/api/comment/repository/memoryComment.repository";
import { adminCreateCommentValidator, adminDeleteCommentValidator, adminEditCommentValidator, adminGetCommentValidator } from "@/api/comment/dto/validation/adminComment.validation";
import { validate } from "@/api/common/middlewares/validation.middleware";
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/routers";
import { MongooseCommentRepository } from "../repository/mongooseComment.repository";
import MongooseUserRepository from "@/api/user/repository/mongooseUser.repository";
import { MongoosePostRepository } from "@/api/posts/repository/mongoosePost.repository";

const adminCommentRouter = express.Router();

/** 관리자 댓글 관련 API 객체 */
const ADMIN_COMMENT_ROUTES = {
  CREATE_COMMENT: "/admin-api/comment",

  GET_COMMENT: "/admin-api/comment",

  GET_COMMENTS: "/admin-api/comment/list/:postId",

  EDIT_COMMENT: "/admin-api/comment/:commentId",

  DELETE_COMMENT: "/admin-api/comment/:commentId",
} as const;

const adminCommentController = new AdminCommentController(new CommentServiceImpl(new MongooseCommentRepository(), new MongooseUserRepository(), new MongoosePostRepository()));

adminCommentRouter.get(extractPath(ADMIN_COMMENT_ROUTES.GET_COMMENT, ROUTES_INDEX.ADMIN_COMMENT_API), validate(adminGetCommentValidator), adminCommentController.getComment);

adminCommentRouter.post(extractPath(ADMIN_COMMENT_ROUTES.CREATE_COMMENT, ROUTES_INDEX.ADMIN_COMMENT_API), validate(adminCreateCommentValidator), adminCommentController.createComment);

adminCommentRouter.put(extractPath(ADMIN_COMMENT_ROUTES.EDIT_COMMENT, ROUTES_INDEX.ADMIN_COMMENT_API), validate(adminEditCommentValidator), adminCommentController.editComment);

adminCommentRouter.delete(extractPath(ADMIN_COMMENT_ROUTES.DELETE_COMMENT, ROUTES_INDEX.ADMIN_COMMENT_API), validate(adminDeleteCommentValidator), adminCommentController.deleteComment);

export default adminCommentRouter;
