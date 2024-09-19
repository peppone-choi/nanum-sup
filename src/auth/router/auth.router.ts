import express from "express";
import AuthController from "@/api/auth/controller/auth.controller";
import { AuthServiceImpl } from "@/api/auth/service/auth.service";
import { MongooseUserRepository } from "@/api/users/repository/user/mongooseUser.repository";
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/routers";

const authRouter = express.Router();

const AUTH_ROUTES = {
  /** 로그인 */
  SIGN_IN: `/api/auth/login`,
} as const;

const authController = new AuthController(
  new AuthServiceImpl(new MongooseUserRepository())
);

authRouter.post(
  extractPath(AUTH_ROUTES.SIGN_IN, ROUTES_INDEX.AUTH_API),
  authController.login
);

export default authRouter;
