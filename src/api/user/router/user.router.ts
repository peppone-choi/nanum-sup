import express from "express";
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/routers";
import { authUserMiddleware } from "@/api/common/middlewares/authUser.middleware";
import UserController from "../controller/user.controller";
import UserServiceImpl from "../service/user.service";
import { MemoryUserRepository } from "../repository/memoryUser.repository";
import { createUserValidator, deleteUserValidator, getUserDetailValidator, updateUserValidator } from "../dto/validation/user.validation";
import { validate } from "@/api/common/middlewares/validation.middleware";
import MongooseUserRepository from "../repository/mongooseUser.repository";
import { MongooseProfileRepository } from "@/api/profile/repository/mongooseProfile.repository";
const userRouter = express.Router();

/** 사용자 API 객체 */
const USER_ROUTES = {
  /** [사용자] 유저 전체 리스트 확인 */
  GET_USERS: `/api/users`,
  /** [사용자] 유저 존재 여부 확인 (유저 id) */
  EXISTS_BY_ACCOUNT_ID: `/api/users/exists/accountId/:accountId`,
  /** [사용자] 유저 존재 여부 확인 (이메일) */
  EXISTS_BY_EMAIL: `/api/users/exists/email/:email`,
  /** [사용자] 유저 존재 여부 확인 (닉네임) */
  EXISTS_BY_NICKNAME: `/api/users/exists/nickname/:nickname`,
  /** [사용자] 유저 상세 정보 확인 */
  GET_USER_DETAIL: `/api/users/:userId`,
  /** [사용자] 회원가입 */
  SIGN_IN: `/api/users`,
  /** [사용자] 유저 정보 수정 */
  UPDATE_USER: `/api/users/:userId`,
  /** [사용자] 회원 탈퇴 */
  DELETE_USER: `/api/users/:userId`,
} as const;

const userController = new UserController(new UserServiceImpl(new MongooseUserRepository(), new MongooseProfileRepository()));

userRouter.get(
  extractPath(USER_ROUTES.GET_USERS, ROUTES_INDEX.USER_API),
  // authUserMiddleware,
  userController.getUsers
);

userRouter.get(
  extractPath(USER_ROUTES.EXISTS_BY_ACCOUNT_ID, ROUTES_INDEX.USER_API),
  // authUserMiddleware,
  userController.existsByAccountId
);

userRouter.get(
  extractPath(USER_ROUTES.EXISTS_BY_EMAIL, ROUTES_INDEX.USER_API),
  // authUserMiddleware,
  userController.existsByEmail
);

userRouter.get(
  extractPath(USER_ROUTES.EXISTS_BY_NICKNAME, ROUTES_INDEX.USER_API),
  // authUserMiddleware,
  userController.existsByNickname
);

userRouter.get(
  extractPath(USER_ROUTES.GET_USER_DETAIL, ROUTES_INDEX.USER_API),
  // authUserMiddleware,
  validate(getUserDetailValidator),
  userController.getUserDetail
);

userRouter.post(extractPath(USER_ROUTES.SIGN_IN, ROUTES_INDEX.USER_API), validate(createUserValidator), userController.signIn);

userRouter.put(extractPath(USER_ROUTES.UPDATE_USER, ROUTES_INDEX.USER_API), authUserMiddleware, validate(updateUserValidator), userController.updateUser);

userRouter.delete(
  extractPath(USER_ROUTES.DELETE_USER, ROUTES_INDEX.USER_API),
  // authUserMiddleware,
  validate(deleteUserValidator),
  userController.deleteUser
);

export default userRouter;
