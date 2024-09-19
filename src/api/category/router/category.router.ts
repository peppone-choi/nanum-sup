import express from "express";
import CategoryController from "../controller/category.controller";
import { CategoryServiceImpl } from "../service/category.service";

const categoryRouter = express.Router();

const CATEGORY_ROUTES = {
    /** 카테고리 목록 조회 (사용자) */
    GET_CATEGORY: `/api/category`,
} as const;

const categoryController = new CategoryController(new CategoryServiceImpl());

categoryRouter.get(
    CATEGORY_ROUTES.GET_CATEGORY,
    categoryController.getCategory
);

export default categoryRouter;
