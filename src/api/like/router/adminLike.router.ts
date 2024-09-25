import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";
import AdminLikeController from "../controller/adminLikeController";
import LikeServiceImpl from "../service/like.service";
import MongooseLikeRepository from "../repository/mongooseLike.repository";

const adminLikeRouter = express.Router();

/** 좋아요 API 객체 */
const LIKE_ROUTES = {
  /** [관리자] 좋아요 목록조회 */
  GET_LIKES: `/admin-api/likes`,
  /** [사용자] 좋아요 삭제 */
  DELETE_LIKE: `/api/likes/:likeId`,
} as const;

const adminLikeController = new AdminLikeController(
  new LikeServiceImpl(new MongooseLikeRepository())
);

adminLikeRouter.get(
  extractPath(LIKE_ROUTES.GET_LIKES, ROUTES_INDEX.ADMIN_LIKE_API),
  adminLikeController.getLikes
);

adminLikeRouter.delete(
  extractPath(LIKE_ROUTES.DELETE_LIKE, ROUTES_INDEX.LIKE_API),
  adminLikeController.deleteLike
);

export default adminLikeRouter;
