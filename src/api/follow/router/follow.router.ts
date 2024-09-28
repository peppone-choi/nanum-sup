import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";
import FollowController from "../controller/follow.controller";
import { authUserMiddleware } from "@/api/common/middlewares/authUser.middleware";
import FollowServiceImpl from "../service/follow.service";
import MongooseFollowRepository from "../repository/mongooseFollow.repository";
import MongooseUserRepository from "@/api/user/repository/mongooseUser.repository";

const followRouter = express.Router();

/** 팔로우 API 객체 */
const FOLLOW_ROUTES = {
  /** [사용자] 팔로잉 목록조회 */
  GET_FOLLOWING_BY_USER_ID: `/api/follows/following/:userId`,
  /** [사용자] 팔로워 목록조회 */
  GET_FOLLOWER_BY_USER_ID: `/api/follows/:userId`,
  /** [사용자] 팔로우 추가 */
  CREATE_FOLLOW: `/api/follows`,
  /** [사용자] 팔로우 끊기*/
  DELETE_FOLLOW: `/api/follows/:followId`,
} as const;

const followController = new FollowController(new FollowServiceImpl(new MongooseFollowRepository(), new MongooseUserRepository()));

followRouter.get(extractPath(FOLLOW_ROUTES.GET_FOLLOWING_BY_USER_ID, ROUTES_INDEX.FOLLOW_API), authUserMiddleware, followController.getFollowingByUserId);

followRouter.get(extractPath(FOLLOW_ROUTES.GET_FOLLOWER_BY_USER_ID, ROUTES_INDEX.FOLLOW_API), authUserMiddleware, followController.getFollowerByUserId);

followRouter.post(extractPath(FOLLOW_ROUTES.CREATE_FOLLOW, ROUTES_INDEX.FOLLOW_API), authUserMiddleware, followController.createFollow);

followRouter.delete(extractPath(FOLLOW_ROUTES.DELETE_FOLLOW, ROUTES_INDEX.FOLLOW_API), authUserMiddleware, followController.deleteFollow);

export default followRouter;
