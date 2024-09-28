import express from "express";
import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import AdminFollowController from "../controller/adminFollow.controller";
import { authRoleMiddleware } from "@/api/common/middlewares/authRole.middleware";

const adminFollowRouter = express.Router();

/** 관리자 팔로우 API 객체 */
const ADMIN_FOLLOW_ROUTES = {
  /** [관리자] 팔로우 목록조회 */
  GET_FOLLOWS: `/admin-api/follows`,
  /** [관리자] 팔로잉 목록조회 */
  GET_FOLLOWING_BY_USER_ID: `/admin-api/follows/following/:userId`,
  /** [관리자] 팔로워 목록조회 */
  GET_FOLLOWER_BY_USER_ID: `/admin-api/follows/:userId`,
  /** [관리자] 팔로우 추가 */
  CREATE_FOLLOW: `/admin-api/follows`,
  /** [관리자] 팔로우 끊기*/
  DELETE_FOLLOW: `/admin-api/follows/:followId`,
} as const;

const adminFollowController = new AdminFollowController();

adminFollowRouter.get(extractPath(ADMIN_FOLLOW_ROUTES.GET_FOLLOWS, ROUTES_INDEX.ADMIN_FOLLOW_API), authRoleMiddleware(["admin"]), adminFollowController.getFollows);

adminFollowRouter.get(extractPath(ADMIN_FOLLOW_ROUTES.GET_FOLLOWING_BY_USER_ID, ROUTES_INDEX.ADMIN_FOLLOW_API), authRoleMiddleware(["admin"]), adminFollowController.getFollowingByUserId);

adminFollowRouter.get(extractPath(ADMIN_FOLLOW_ROUTES.GET_FOLLOWER_BY_USER_ID, ROUTES_INDEX.ADMIN_FOLLOW_API), authRoleMiddleware(["admin"]), adminFollowController.getFollowerByUserId);

adminFollowRouter.post(extractPath(ADMIN_FOLLOW_ROUTES.CREATE_FOLLOW, ROUTES_INDEX.ADMIN_FOLLOW_API), authRoleMiddleware(["admin"]), adminFollowController.createFollow);

adminFollowRouter.delete(extractPath(ADMIN_FOLLOW_ROUTES.DELETE_FOLLOW, ROUTES_INDEX.ADMIN_FOLLOW_API), authRoleMiddleware(["admin"]), adminFollowController.deleteFollow);

export default adminFollowRouter;
