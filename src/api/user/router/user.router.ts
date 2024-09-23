import express from "express";
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/routers";
import { authUserMiddleware } from "@/api/common/middlewares/authUser.middleware";
import UserController from "../controller/user.controller";

const userRouter = express.Router();

/** 사용자 API 객체 */
const USER_ROUTES = {
  /** [사용자] 유저 전체 리스트 확인 */
  GET_USERS: `/api/users`,
  /** [사용자] 유저 상세 정보 확인 */
  GET_USER_DETAIL: `/api/users/:userId`,
  /** [사용자] 회원가입 */
  SIGN_IN: `/api/users`,
  /** [사용자] 유저 정보 수정 */
  UPDATE_USER: `/api/users/:userId`,
  /** [사용자] 유저 삭제 */
  DELETE_USER: `/api/users/:userId`,
} as const;

const userController = new UserController();

userRouter.get(
  extractPath(USER_ROUTES.GET_USERS, ROUTES_INDEX.USER_API),
  userController.getUsers
);

userRouter.get(
  extractPath(USER_ROUTES.GET_USER_DETAIL, ROUTES_INDEX.USER_API),
  userController.getUserDetail
);

userRouter.post(
  extractPath(USER_ROUTES.SIGN_IN, ROUTES_INDEX.USER_API),
  userController.signIn
);

userRouter.put(
  extractPath(USER_ROUTES.UPDATE_USER, ROUTES_INDEX.USER_API),
  userController.updateUser
);

userRouter.delete(
  extractPath(USER_ROUTES.DELETE_USER, ROUTES_INDEX.USER_API),
  userController.deleteUser
);

export default userRouter;
