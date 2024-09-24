import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";
import AdminCategoryViewController from "../controller/adminCategory.view.controller";
import { CategoryServiceImpl } from "../service/category.service";
import { MongooseCategoryRepository } from "../repository/mongooseCategory.repository";
// import { MongooseUserRepository } from "@/api/user/repository/mongooseUser.repository";
import { MongoosePostRepository } from "@/api/posts/repository/mongoosePost.repository";

const adminCategoryViewRouter = express.Router();

const ADMIN_CATEGORY_VIEW_ROUTES = {
    /** 카테고리 목록 */
    CATEGORY_LIST: "/admin/category",
    /** 카테고리 상세  */
    CATEGORY_DETAIL: "/admin/category/:categoryId",
    /**카테고리 등록 */
    CATEGORY_WRITE: "/admin/category/write",
    /** 카테고리 수정 */
    CATEGORY_EDIT: "/admin/category/:categoryId/edit",
} as const;

const adminCategoryViewController = new AdminCategoryViewController(
    new CategoryServiceImpl(
        new MongooseCategoryRepository()
        // new MongoosePostRepository()
    )
);

adminCategoryViewRouter.get(
    extractPath(
        ADMIN_CATEGORY_VIEW_ROUTES.CATEGORY_LIST,
        ROUTES_INDEX.ADMIN_CATEGORY_VIEW
    ),
    adminCategoryViewController.categoryListPage
);

adminCategoryViewRouter.get(
    extractPath(
        ADMIN_CATEGORY_VIEW_ROUTES.CATEGORY_WRITE,
        ROUTES_INDEX.ADMIN_CATEGORY_VIEW
    ),
    adminCategoryViewController.categoryWritePage
);

adminCategoryViewRouter.get(
    extractPath(
        ADMIN_CATEGORY_VIEW_ROUTES.CATEGORY_EDIT,
        ROUTES_INDEX.ADMIN_CATEGORY_VIEW
    ),
    adminCategoryViewController.categoryEditPage
);

adminCategoryViewRouter.get(
    extractPath(
        ADMIN_CATEGORY_VIEW_ROUTES.CATEGORY_DETAIL,
        ROUTES_INDEX.ADMIN_CATEGORY_VIEW
    ),
    adminCategoryViewController.categoryDetailPage
);

export default adminCategoryViewRouter;
