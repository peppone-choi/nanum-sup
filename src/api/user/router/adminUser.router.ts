import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";
import AdminUserController from "../controller/adminUser.controller";
import UserServiceImpl from "../service/user.service";
import { MemoryUserRepository } from "../repository/memoryUser.repository";
import { authRoleMiddleware } from "@/api/common/middlewares/authRole.middleware";
import { validate } from "@/api/common/middlewares/validation.middleware";
import {
  adminCreateUserValidator,
  adminDeleteUserValidator,
  adminGetUserDetailValidator,
  adminUpdateUserValidator,
} from "../dto/validation/adminUser.validation";

const adminUserRouter = express.Router();

/** 문영자 API 객체 */
const USER_ROUTES = {
  /** [운영자] 유저 전체 리스트 확인 */
  GET_USERS: `/api/users`,
  /** [운영자] 유저 상세 정보 확인 */
  GET_USER_DETAIL: `/api/users/:userId`,
  /** [운영자] 회원추가 */
  CREATE_USER: `/api/users`,
  /** [운영자] 유저 정보 수정 */
  UPDATE_USER: `/api/users/:userId`,
  /** [운영자] 유저 삭제 */
  DELETE_USER: `/api/users/:userId`,
} as const;

const adminUserController = new AdminUserController(
  new UserServiceImpl(new MemoryUserRepository())
);

adminUserRouter.get(
  extractPath(USER_ROUTES.GET_USERS, ROUTES_INDEX.ADMIN_USER_API),
  authRoleMiddleware(["admin"]),
  adminUserController.getAdminUsers
);

adminUserRouter.get(
  extractPath(USER_ROUTES.GET_USER_DETAIL, ROUTES_INDEX.ADMIN_USER_API),
  authRoleMiddleware(["admin"]),
  validate(adminGetUserDetailValidator),
  adminUserController.getAdminUserDetail
);

adminUserRouter.post(
  extractPath(USER_ROUTES.CREATE_USER, ROUTES_INDEX.ADMIN_USER_API),
  authRoleMiddleware(["admin"]),
  validate(adminCreateUserValidator),
  adminUserController.createAdminUser
);

adminUserRouter.put(
  extractPath(USER_ROUTES.UPDATE_USER, ROUTES_INDEX.ADMIN_USER_API),
  authRoleMiddleware(["admin"]),
  validate(adminUpdateUserValidator),
  adminUserController.updateAdminUser
);

adminUserRouter.delete(
  extractPath(USER_ROUTES.DELETE_USER, ROUTES_INDEX.ADMIN_USER_API),
  authRoleMiddleware(["admin"]),
  validate(adminDeleteUserValidator),
  adminUserController.deleteAdminUser
);

export default adminUserRouter;
