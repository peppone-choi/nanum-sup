import { healthCheck } from "@/api/controllers/common.controller";
import express from "express";
import AdminCommentController from "@/api/controllers/admin/adminApp.controller";

const adminAppRouter = express.Router();

const BASE_PATH = "/admin-api";

// 모듈화 사용전
// adminAppRouter.get(`${BASE_PATH}`, (req, res) => {
//   res.send("서버 건강하다잉");
// });
// 모듈화 사용 후

const COMMENT_ROUTES = {
    CREATE_COMMENT: '/admin-api/comment',

    GET_COMMENT: '/admin-api/comment',

    EDIT_COMMENT: '/admin-api/comment/:commentId',

    DELETE_COMMENT: 'admin-api/comment/:commentId',
} as const;

const adminCommentController = new AdminCommentController();

adminAppRouter.get(`${BASE_PATH}`, healthCheck);

adminAppRouter.post(COMMENT_ROUTES.CREATE_COMMENT, adminCommentController.createComment);

adminAppRouter.get(COMMENT_ROUTES.GET_COMMENT, adminCommentController.getComment);

adminAppRouter.put(COMMENT_ROUTES.EDIT_COMMENT, adminCommentController.editComment);

adminAppRouter.delete(COMMENT_ROUTES.DELETE_COMMENT, adminCommentController.deleteComment);

export default adminAppRouter;
