import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";
import CategoryViewController from "../controller/category.view.controller";
import { MongooseCategoryRepository } from "../repository/mongooseCategory.repository";
import { CategoryServiceImpl } from "../service/category.service";

const categoryViewRouter = express.Router();

const CATEGORY_VIEW_ROUTES = {
    /** 카테고리 목록 */
    CATEGORY_LIST: "/category",
    /** 카테고리 상세  */
    CATEGORY_DETAIL: "/category/:categoryId",
} as const;

const categoryViewController = new CategoryViewController(
    new CategoryServiceImpl(new MongooseCategoryRepository())
);

categoryViewRouter.get(
    extractPath(CATEGORY_VIEW_ROUTES.CATEGORY_LIST, ROUTES_INDEX.CATEGORY_VIEW),
    categoryViewController.userCategoryListPage
);

categoryViewRouter.get(
    extractPath(
        CATEGORY_VIEW_ROUTES.CATEGORY_DETAIL,
        ROUTES_INDEX.CATEGORY_VIEW
    ),
    categoryViewController.userCategoryDetailPage
);

// CATEGORY_LIST 경로 확인
const categoryListPath = extractPath(
    CATEGORY_VIEW_ROUTES.CATEGORY_LIST,
    ROUTES_INDEX.CATEGORY_VIEW
);
console.log("카테고리 목록 경로:", categoryListPath);

categoryViewRouter.get(
    categoryListPath,
    categoryViewController.userCategoryListPage
);

// CATEGORY_DETAIL 경로 확인
const categoryDetailPath = extractPath(
    CATEGORY_VIEW_ROUTES.CATEGORY_DETAIL,
    ROUTES_INDEX.CATEGORY_VIEW
);
console.log("카테고리 상세 경로:", categoryDetailPath);

categoryViewRouter.get(
    categoryDetailPath,
    categoryViewController.userCategoryDetailPage
);

export default categoryViewRouter;
