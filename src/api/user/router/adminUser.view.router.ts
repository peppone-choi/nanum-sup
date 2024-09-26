import { authCookieRoleMiddleware } from "@/api/common/middlewares/authCookieRole.middleware";
import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";
import AdminUserViewController from "../controller/adminuser.view.controller";
import UserServiceImpl from "../service/user.service";
import MongooseUserRepository from "../repository/mongooseUser.repository";
import { MongooseProfileRepository } from "@/api/profile/repository/mongooseProfile.repository";

const adminUserViewRouter = express.Router();

const ADMIN_USER_VIEW_ROUTES = {
  /** 유저 목록 */
  USER_LIST: "/admin/users",
  /** 유저 추가 */
  USER_ADD: "/admin/user/add",
  /** 유저 수정 */
  USER_EDIT: "/admin/users/:userId/edit",
  /** 유저 상세 */
  USER_DETAIL: "/admin/users/:userId",
} as const;

const adminUserViewController = new AdminUserViewController(new UserServiceImpl(new MongooseUserRepository(), new MongooseProfileRepository()));

adminUserViewRouter.get(extractPath(ADMIN_USER_VIEW_ROUTES.USER_LIST, ROUTES_INDEX.ADMIN_USER_VIEW), adminUserViewController.userListPage, () => {
  console.log(45);
});

adminUserViewRouter.get(extractPath(ADMIN_USER_VIEW_ROUTES.USER_ADD, ROUTES_INDEX.ADMIN_USER_VIEW), adminUserViewController.userAddPage);

adminUserViewRouter.get(extractPath(ADMIN_USER_VIEW_ROUTES.USER_EDIT, ROUTES_INDEX.ADMIN_USER_VIEW), adminUserViewController.userEditPage);

adminUserViewRouter.get(extractPath(ADMIN_USER_VIEW_ROUTES.USER_DETAIL, ROUTES_INDEX.ADMIN_USER_VIEW), adminUserViewController.userDetailPage);

export default adminUserViewRouter;
