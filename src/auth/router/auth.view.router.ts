import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";
import AuthViewController from "../controller/auth.view.controller";
import { AuthServiceImpl } from "../service/auth.service";
import { MongooseUserRepository } from "@/api/users/repository/user/mongooseUser.repository";
import { UsersServiceImpl } from "@/api/users/service/users.service";
import { MongooseProfileRepository } from "@/api/users/repository/profile/mongooseProfile.repository";

const authViewRouter = express.Router();

const authViewController = new AuthViewController(
  new AuthServiceImpl(new MongooseUserRepository()),
  new UsersServiceImpl(
    new MongooseUserRepository(),
    new MongooseProfileRepository()
  )
);

const AUTH_VIEW_ROUTES = {
  /** 로그인 */
  SIGN_IN: `/auth/login`,
  /** 회원가입 */
  SIGN_UP: `/auth/signup`,
} as const;

authViewRouter.get(
  extractPath(AUTH_VIEW_ROUTES.SIGN_IN, ROUTES_INDEX.AUTH_VIEW),
  authViewController.loginPage
);

authViewRouter.post(
  extractPath(AUTH_VIEW_ROUTES.SIGN_IN, ROUTES_INDEX.AUTH_VIEW),
  authViewController.login
);

authViewRouter.get(
  extractPath(AUTH_VIEW_ROUTES.SIGN_UP, ROUTES_INDEX.AUTH_VIEW),
  authViewController.signUpPage
);

export default authViewRouter;
