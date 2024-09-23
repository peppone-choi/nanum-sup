import express from "express";
import CategoryController from "@/api/category/controller/category.controller";
import { CategoryServiceImpl } from "@/api/category/service/category.service";
import { MemoryCategoryRepository } from "@/api/category/repository/memoryCategory.repository";
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/routers";
import { authUserMiddleware } from "@/api/common/middlewares/authUser.middleware";
import { validate } from "@/api/common/middlewares/validation.middleware";
import {
    getCategoryDetailValidator,
    getCategoryValidator,
} from "../dto/validation/category.validation";

const categoryRouter = express.Router();

const CATEGORY_ROUTES = {
    /** 카테고리 목록 조회 (사용자) */
    GET_CATEGORY: `/api/category`,
    /** 카테고리 상세 조회 (사용자) */
    GET_CATEGORY_DETAIL: `/api/category/:categoryId`,
} as const;

const categoryController = new CategoryController(
    new CategoryServiceImpl(new MemoryCategoryRepository())
);

categoryRouter.get(
    extractPath(CATEGORY_ROUTES.GET_CATEGORY, ROUTES_INDEX.CATEGORY_API),
    // authUserMiddleware,
    validate(getCategoryValidator),
    categoryController.getCategory
);

categoryRouter.get(
    extractPath(CATEGORY_ROUTES.GET_CATEGORY_DETAIL, ROUTES_INDEX.CATEGORY_API),
    // authUserMiddleware,
    validate(getCategoryDetailValidator),
    categoryController.getCategoryDetail
);

export default categoryRouter;
