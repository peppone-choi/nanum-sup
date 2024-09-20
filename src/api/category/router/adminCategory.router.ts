import express from "express";
import AdminCategoryController from "@/api/category/controller/adminCategory.controller";
import { CategoryServiceImpl } from "@/api/category/service/category.service";
import { MemoryCategoryRepository } from "@/api/category/repository/memoryCategory.repository";
import {
    adminCreateCategoryValidator,
    adminDeleteCategoryValidator,
    adminGetCategoryDetailValidator,
    adminGetCategoryValidator,
    adminUpdateCategoryValidator,
} from "@/api/category/dto/validation/adminCategory.validation";
import { validate } from "@/api/common/middleware/validation.moddleware";
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/routers";
import { authUserMiddleware } from "@/api/common/middlewares/authUser.middleware";

const adminCategoryRouter = express.Router();

/** 관리자 카테고리 관련 API 객체 */
const ADMIN_CATEGORY_ROUTES = {
    /**카테고리 목록 조회 (관리자) */
    GET_CATEGORY: `/admin-api/category`,
    /**카테고리 상세 조회 (관리자) */
    GET_CATEGORY_DETAIL: `/admin-api/category:categoryId`,
    /**카테고리 등록 (관리자) */
    CREATE_CATEGORY: `/admin-api/category`,
    /** 카테고리 수정 (관리자) */
    UPDATE_CATEGORY: `/admin-api/category/:categoryId`,
    /** 카테고리 삭제 (관리자) */
    DELETE_CATEGORY: `/admin-api/category/:categoryId`,
} as const;

const adminCategoryController = new AdminCategoryController(
    new CategoryServiceImpl(new MemoryCategoryRepository())
);

adminCategoryRouter.get(
    extractPath(
        ADMIN_CATEGORY_ROUTES.GET_CATEGORY,
        ROUTES_INDEX.ADMIN_CATEGORY_API
    ),
    // authUserMiddleware,
    validate(adminGetCategoryValidator),
    adminCategoryController.getCategory
);

adminCategoryRouter.get(
    extractPath(
        ADMIN_CATEGORY_ROUTES.GET_CATEGORY_DETAIL,
        ROUTES_INDEX.ADMIN_CATEGORY_API
    ),
    // authUserMiddleware,
    validate(adminGetCategoryDetailValidator),
    adminCategoryController.getCategoryDetail
);

adminCategoryRouter.post(
    extractPath(
        ADMIN_CATEGORY_ROUTES.CREATE_CATEGORY,
        ROUTES_INDEX.ADMIN_CATEGORY_API
    ),
    // authUserMiddleware,
    validate(adminCreateCategoryValidator),
    adminCategoryController.createCategory
);

adminCategoryRouter.put(
    extractPath(
        ADMIN_CATEGORY_ROUTES.UPDATE_CATEGORY,
        ROUTES_INDEX.ADMIN_CATEGORY_API
    ),
    // authUserMiddleware,
    validate(adminUpdateCategoryValidator),
    adminCategoryController.updateCategory
);

adminCategoryRouter.delete(
    extractPath(
        ADMIN_CATEGORY_ROUTES.DELETE_CATEGORY,
        ROUTES_INDEX.ADMIN_CATEGORY_API
    ),
    // authUserMiddleware,
    validate(adminDeleteCategoryValidator),
    adminCategoryController.deleteCategory
);

export default adminCategoryRouter;
