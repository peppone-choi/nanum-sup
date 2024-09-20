import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";
import CommentViewController from "../controller/adminComment.view.controller";
import { MongooseCommentRepository } from "../repository/mongooseComment.repository";
import CommentServiceImpl from "../service/comment.service";

const commentViewRouter = express.Router();

const CATEGORY_VIEW_ROUTES = {
    /** 카테고리 목록 */
    CATEGORY_LIST: "/client/comment",
    /** 카테고리 상세  */
    CATEGORY_DETAIL: "/client/comment/:commentId",
} as const;

const commentViewController = new CommentViewController(
    new CommentServiceImpl(new MongooseCommentRepository())
);

commentViewRouter.get(
    extractPath(CATEGORY_VIEW_ROUTES.CATEGORY_LIST, ROUTES_INDEX.CATEGORY_VIEW),
    commentViewController.commentListPage
);

commentViewRouter.get(
    extractPath(
        CATEGORY_VIEW_ROUTES.CATEGORY_DETAIL,
        ROUTES_INDEX.CATEGORY_VIEW
    ),
    commentViewController.commentDetailPage
);

export default commentViewRouter;
