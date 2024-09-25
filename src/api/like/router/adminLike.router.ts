import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";

const adminLikeRouter = express.Router();

/** 좋아요 API 객체 */
const LIKE_ROUTES = {
  /** [관리자] 좋아요 목록조회 */
  GET_LIKES: `/admin-api/likes`,
  /** [사용자] 좋아요 삭제 */
  DELETE_LIKE: `/api/likes/:likeId`,
} as const;

adminLikeRouter.get(
  extractPath(LIKE_ROUTES.GET_LIKES, ROUTES_INDEX.ADMIN_LIKE_API)
);

adminLikeRouter.delete(
  extractPath(LIKE_ROUTES.DELETE_LIKE, ROUTES_INDEX.LIKE_API)
);

export default adminLikeRouter;
