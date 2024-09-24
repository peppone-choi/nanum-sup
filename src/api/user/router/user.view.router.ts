import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";
import UsersViewController from "../controller/user.view.controller";
import UserServiceImpl from "../service/user.service";
import MongooseUserRepository from "../repository/mongooseUser.repository";
// import { MongooseProfileRepository } from "../repository/profile/mongooseProfile.repository";
import { authCookieViewMiddleware } from "@/api/common/middlewares/authCookie.middleware";

const userViewRouter = express.Router();

const USER_VIEW_ROUTES = {
  /** 마이페이지 */
  MY_PAGE: "/users/me",
  /** 유저 상세 */
  USER_DETAIL: "/users/:userId",
  /** 회원 탈퇴 */
  USER_DELETE: "/users/withdrawal",
} as const;

const usersViewController = new UsersViewController(
  new UserServiceImpl(
    new MongooseUserRepository()
    // new MongooseProfileRepository()
  )
);

userViewRouter.get(
  extractPath(USER_VIEW_ROUTES.MY_PAGE, ROUTES_INDEX.USER_VIEW),
  // authCookieViewMiddleware(true),
  usersViewController.myPage
);

userViewRouter.get(
  extractPath(USER_VIEW_ROUTES.USER_DELETE, ROUTES_INDEX.USER_VIEW),
  usersViewController.withDrawPage
);

userViewRouter.get(
  extractPath(USER_VIEW_ROUTES.USER_DETAIL, ROUTES_INDEX.USER_VIEW),
  usersViewController.userDetailPage
);

export default userViewRouter;
