import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";
import AdminCommentViewController from "../controller/adminComment.view.controller";
import { CommentServiceImpl } from "../service/comment.service";
import { MongooseCommentRepository } from "../repository/mongooseComment.repository";

const adminCommentViewRouter = express.Router();

const ADMIN_COMMENT_VIEW_ROUTES = {
    /** 카테고리 목록 */
    COMMENT_LIST: "/admin/comment",
    /** 카테고리 상세  */
    COMMENT_DETAIL: "/admin/comment/:commentId",
    /**카테고리 등록 */
    COMMENT_WRITE: "/admin/comment/write",
    /** 카테고리 수정 */
    COMMENT_EDIT: "/admin/comment/:commentId/edit",
} as const;

const adminCommentViewController = new AdminCommentViewController(
    new CommentServiceImpl(new MongooseCommentRepository())
);


adminCommentViewRouter.get(
    extractPath(
        ADMIN_COMMENT_VIEW_ROUTES.COMMENT_WRITE,
        ROUTES_INDEX.ADMIN_COMMENT_VIEW
    ),
    adminCommentViewController.commentWritePage
);

adminCommentViewRouter.get(
    extractPath(
        ADMIN_COMMENT_VIEW_ROUTES.COMMENT_DETAIL,
        ROUTES_INDEX.ADMIN_COMMENT_VIEW
    ),
    adminCommentViewController.commentDetailPage
);

adminCommentViewRouter.get(
    extractPath(
        ADMIN_COMMENT_VIEW_ROUTES.COMMENT_EDIT,
        ROUTES_INDEX.ADMIN_COMMENT_VIEW
    ),
    adminCommentViewController.commentEditPage
);

export default adminCommentViewRouter;
