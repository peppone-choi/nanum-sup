import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";
import AdminAuthViewController from "../controller/adminAuth.view.controller";
import { AuthServiceImpl } from "../service/auth.service";
import { MongooseUserRepository } from "@/api/users/repository/user/mongooseUser.repository";

const adminAuthViewRouter = express.Router();

const ADMIN_AUTH_VIEW_ROUTES = {
  /** 관리자 페이지 로그인 */
  SIGN_IN: `/admin/auth/login`,
} as const;

const adminAuthViewController = new AdminAuthViewController(
  new AuthServiceImpl(new MongooseUserRepository())
);

adminAuthViewRouter.get(
  extractPath(ADMIN_AUTH_VIEW_ROUTES.SIGN_IN, ROUTES_INDEX.ADMIN_AUTH_VIEW),
  adminAuthViewController.loginPage
);

adminAuthViewRouter.post(
  extractPath(ADMIN_AUTH_VIEW_ROUTES.SIGN_IN, ROUTES_INDEX.ADMIN_AUTH_VIEW),
  adminAuthViewController.login
);

export default adminAuthViewRouter;
