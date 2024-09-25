import { validate } from "@/api/common/middlewares/validation.middleware";
import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";

const likeRouter = express.Router();

/** 좋아요 API 객체 */
const LIKE_ROUTES = {
  /** [사용자] 좋아요 목록조회 */
  GET_LIKES_POST: `/api/likes/posts/:postId`,
  /** [사용자] 좋아요 댓글 조회*/
  GET_LIKES_COMMENT: `/api/likes/comments/:commentId`,
  /** [사용자] 좋아요 등록 */
  CREATE_LIKE: `/api/likes`,
  /** [사용자] 좋아요 삭제 */
  DELETE_LIKE: `/api/likes/:likeId`,
} as const;

likeRouter.get(extractPath(LIKE_ROUTES.GET_LIKES_POST, ROUTES_INDEX.LIKE_API));

likeRouter.get(
  extractPath(LIKE_ROUTES.GET_LIKES_COMMENT, ROUTES_INDEX.LIKE_API)
);

likeRouter.post(extractPath(LIKE_ROUTES.CREATE_LIKE, ROUTES_INDEX.LIKE_API));

likeRouter.delete(extractPath(LIKE_ROUTES.DELETE_LIKE, ROUTES_INDEX.LIKE_API));

export default likeRouter;
