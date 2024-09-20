import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";
import CategoryViewController from "../controller/category.view.controller";
import { MongooseCategoryRepository } from "../repository/mongooseCategory.repository";
import { CategoryServiceImpl } from "../service/category.service";

const categoryViewRouter = express.Router();

const CATEGORY_VIEW_ROUTES = {
    /** 카테고리 목록 */
    CATEGORY_LIST: "/client/category",
    /** 카테고리 상세  */
    CATEGORY_DETAIL: "/client/category/:categoryId",
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
    categoryViewController.userCategoryListPage
);

export default categoryViewRouter;
