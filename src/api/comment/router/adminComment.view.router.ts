import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";
import AdminCommentViewController from "../controller/adminComment.view.controller";
import CommentServiceImpl from "../service/comment.service";
import { MongooseCommentRepository } from "../repository/mongooseComment.repository";
import MongooseUserRepository from "@/api/user/repository/mongooseUser.repository";
import { MongoosePostRepository } from "@/api/posts/repository/mongoosePost.repository";

const adminCommentViewRouter = express.Router();

const ADMIN_COMMENT_VIEW_ROUTES = {
  CREATE_COMMENT: "/admin/comment",

  GET_COMMENT: "/admin/comment",

  EDIT_COMMENT: "/admin/comment/:commentId",

  DELETE_COMMENT: "/admin/comment/:commentId",
} as const;

const adminCommentViewController = new AdminCommentViewController(new CommentServiceImpl(new MongooseCommentRepository(), new MongooseUserRepository(), new MongoosePostRepository()));

adminCommentViewRouter.get(extractPath(ADMIN_COMMENT_VIEW_ROUTES.CREATE_COMMENT, ROUTES_INDEX.ADMIN_COMMENT_VIEW), adminCommentViewController.commentWritePage);

adminCommentViewRouter.get(extractPath(ADMIN_COMMENT_VIEW_ROUTES.EDIT_COMMENT, ROUTES_INDEX.ADMIN_COMMENT_VIEW), adminCommentViewController.commentEditPage);

export default adminCommentViewRouter;
