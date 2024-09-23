import MongooseUserRepository from "@/api/user/repository/mongooseUser.repository";
import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";
import { AuthServiceImpl } from "../service/auth.service";
import AuthController from "../controller/auth.controller";

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
