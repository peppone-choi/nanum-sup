import { validate } from "@/api/common/middlewares/validation.middleware";
import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";
import LikeController from "../controller/like.controller";
import LikeServiceImpl from "../service/like.service";
import MongooseLikeRepository from "../repository/mongooseLike.repository";
import MongooseUserRepository from "@/api/user/repository/mongooseUser.repository";

const likeRouter = express.Router();

/** 좋아요 API 객체 */
const LIKE_ROUTES = {
  /** [사용자] 좋아요 목록조회 */
  GET_LIKES_POST: `/api/likes/posts/:postId`,
  /** [사용자] 좋아요 갯수 확인 */
  GET_LIKES_POST_COUNT: `/api/likes/posts/:postId/number`,
  /** [사용자] 좋아요 댓글 조회*/
  GET_LIKES_COMMENT: `/api/likes/comments/:commentId`,
  /** [사용자] 좋아요 갯수 확인 */
  GET_LIKES_COMMENT_COUNT: `/api/likes/comments/:commentId/number`,
  /** [사용자] 좋아요 등록 */
  CREATE_LIKE: `/api/likes`,
  /** [사용자] 좋아요 삭제 */
  DELETE_LIKE: `/api/likes/:likeId`,
} as const;

const likeController = new LikeController(new LikeServiceImpl(new MongooseLikeRepository(), new MongooseUserRepository()));

likeRouter.post(extractPath(LIKE_ROUTES.CREATE_LIKE, ROUTES_INDEX.LIKE_API), likeController.createLike);

likeRouter.delete(extractPath(LIKE_ROUTES.DELETE_LIKE, ROUTES_INDEX.LIKE_API), likeController.deleteLike);

export default likeRouter;
