import express from "express";
import AdminCategoryController from "../controller/adminCategory.controller";
import { CategoryServiceImpl } from "../service/category.service";

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
    new CategoryServiceImpl()
);

adminCategoryRouter.get(
    ADMIN_CATEGORY_ROUTES.GET_CATEGORY,
    adminCategoryController.getCategory
);

adminCategoryRouter.get(
    ADMIN_CATEGORY_ROUTES.GET_CATEGORY_DETAIL,
    adminCategoryController.getCategoryDetail
);

adminCategoryRouter.post(
    ADMIN_CATEGORY_ROUTES.CREATE_CATEGORY,
    adminCategoryController.createCategory
);

adminCategoryRouter.put(
    ADMIN_CATEGORY_ROUTES.UPDATE_CATEGORY,
    adminCategoryController.updateCategory
);

adminCategoryRouter.delete(
    ADMIN_CATEGORY_ROUTES.DELETE_CATEGORY,
    adminCategoryController.deleteCategory
);

export default adminCategoryRouter;
