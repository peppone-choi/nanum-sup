import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";
import AdminUserController from "../controller/adminUser.controller";
import UserServiceImpl from "../service/user.service";
import { MemoryUserRepository } from "../repository/memoryUser.repository";
import { authRoleMiddleware } from "@/api/common/middlewares/authRole.middleware";
import { validate } from "@/api/common/middlewares/validation.middleware";
import { adminCreateUserValidator, adminDeleteUserValidator, adminGetUserDetailValidator, adminUpdateUserValidator } from "../dto/validation/adminUser.validation";
import MongooseUserRepository from "../repository/mongooseUser.repository";
import { MongooseProfileRepository } from "@/api/profile/repository/mongooseProfile.repository";

const adminUserRouter = express.Router();

/** 관리자 유저 관련 API 경로 객체 */
const ADMIN_USER_ROUTES = {
  /** [관리자] 유저 전체 리스트 조회 */
  GET_USERS: `/admin-api/users`,
  /** [관리자] 유저 상세 정보 조회 */
  GET_USER_DETAIL: `/admin-api/users/:userId`,
  /** [관리자] 유저 추가 */
  CREATE_USER: `/admin-api/users`,
  /** [관리자] 유저 정보 수정 */
  UPDATE_USER: `/admin-api/users/:userId`,
  /** [관리자] 유저 삭제 */
  DELETE_USER: `/admin-api/users/:userId`,
} as const;

const adminUserController = new AdminUserController(new UserServiceImpl(new MongooseUserRepository(), new MongooseProfileRepository()));

adminUserRouter.get(
  extractPath(ADMIN_USER_ROUTES.GET_USERS, ROUTES_INDEX.ADMIN_USER_API),
  // authRoleMiddleware(["admin"]),
  adminUserController.getAdminUsers
);

adminUserRouter.get(
  extractPath(ADMIN_USER_ROUTES.GET_USER_DETAIL, ROUTES_INDEX.ADMIN_USER_API),
  // authRoleMiddleware(["admin"]),
  validate(adminGetUserDetailValidator),
  adminUserController.getAdminUserDetail
);

adminUserRouter.post(
  extractPath(ADMIN_USER_ROUTES.CREATE_USER, ROUTES_INDEX.ADMIN_USER_API),
  // authRoleMiddleware(["admin"]),
  validate(adminCreateUserValidator),
  adminUserController.createAdminUser
);

adminUserRouter.put(
  extractPath(ADMIN_USER_ROUTES.UPDATE_USER, ROUTES_INDEX.ADMIN_USER_API),
  // authRoleMiddleware(["admin"]),
  validate(adminUpdateUserValidator),
  adminUserController.updateAdminUser
);

adminUserRouter.delete(
  extractPath(ADMIN_USER_ROUTES.DELETE_USER, ROUTES_INDEX.ADMIN_USER_API),
  // authRoleMiddleware(["admin"]),
  validate(adminDeleteUserValidator),
  adminUserController.deleteAdminUser
);

export default adminUserRouter;
