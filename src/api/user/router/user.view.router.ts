import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";
import UsersViewController from "../controller/user.view.controller";
import UserServiceImpl from "../service/user.service";
import MongooseUserRepository from "../repository/mongooseUser.repository";
// import { MongooseProfileRepository } from "../repository/profile/mongooseProfile.repository";
import { authCookieViewMiddleware } from "@/api/common/middlewares/authCookie.middleware";
import { MongooseProfileRepository } from "@/api/profile/repository/mongooseProfile.repository";
import FollowServiceImpl from "@/api/follow/service/follow.service";
import MongooseFollowRepository from "@/api/follow/repository/mongooseFollow.repository";
import { PostsServiceImpl } from "@/api/posts/service/posts.service";
import { MongoosePostRepository } from "@/api/posts/repository/mongoosePost.repository";
import { MongooseCategoryRepository } from "@/api/category/repository/mongooseCategory.repository";
import { MongooseCommentRepository } from "@/api/comment/repository/mongooseComment.repository";
import MongooseLikeRepository from "@/api/like/repository/mongooseLike.repository";

const userViewRouter = express.Router();

const USER_VIEW_ROUTES = {
  /** 마이페이지 */
  MY_PAGE: "/users/me",
  /** 유저 상세 */
  USER_DETAIL: "/users/:userId",
  /** 유저 수정 */
  USER_EDIT: "/users/:userId/edit",
  /** 회원 탈퇴 */
  USER_DELETE: "/users/withdrawal",
} as const;

const usersViewController = new UsersViewController(
  new UserServiceImpl(new MongooseUserRepository(), new MongooseProfileRepository()),
  new FollowServiceImpl(new MongooseFollowRepository(), new MongooseUserRepository()),
  new PostsServiceImpl(new MongoosePostRepository(), new MongooseUserRepository(), new MongooseCategoryRepository(), new MongooseCommentRepository(), new MongooseLikeRepository())
);

userViewRouter.get(extractPath(USER_VIEW_ROUTES.MY_PAGE, ROUTES_INDEX.USER_VIEW), authCookieViewMiddleware(true), usersViewController.myPage);

userViewRouter.get(extractPath(USER_VIEW_ROUTES.USER_EDIT, ROUTES_INDEX.USER_VIEW), authCookieViewMiddleware(true), usersViewController.userEditPage);

userViewRouter.get(extractPath(USER_VIEW_ROUTES.USER_DELETE, ROUTES_INDEX.USER_VIEW), authCookieViewMiddleware(true), usersViewController.withDrawPage);

userViewRouter.get(extractPath(USER_VIEW_ROUTES.USER_DETAIL, ROUTES_INDEX.USER_VIEW), authCookieViewMiddleware(false), usersViewController.userDetailPage);

export default userViewRouter;
