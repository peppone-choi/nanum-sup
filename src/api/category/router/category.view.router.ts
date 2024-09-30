import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";
import CategoryViewController from "../controller/category.view.controller";
import { MongooseCategoryRepository } from "../repository/mongooseCategory.repository";
import { CategoryServiceImpl } from "../service/category.service";

// import { MongooseUserRepository } from "@/api/user/repository/mongooseUser.repository";
import { MongoosePostRepository } from "@/api/posts/repository/mongoosePost.repository";
import { Post } from "@/api/posts/model/post.model";
import { PostsServiceImpl } from "@/api/posts/service/posts.service";
import MongooseUserRepository from "@/api/user/repository/mongooseUser.repository";
import { MongooseCommentRepository } from "@/api/comment/repository/mongooseComment.repository";

const categoryViewRouter = express.Router();

const CATEGORY_VIEW_ROUTES = {
    /** 카테고리 목록 */
    CATEGORY_LIST: "/category",
    /** 카테고리 상세  */
    CATEGORY_DETAIL: "/category/:categoryId/posts",
} as const;

const categoryViewController = new CategoryViewController(
    new CategoryServiceImpl(
        new MongooseCategoryRepository()
        // new MongoosePostRepository(),
        // new MongooseUserRepository()
    ),
    new PostsServiceImpl(
        new MongoosePostRepository(),
        new MongooseUserRepository(),
        new MongooseCategoryRepository(),
        new MongooseCommentRepository()
    )
);

// categoryViewRouter.get(
//     extractPath(CATEGORY_VIEW_ROUTES.CATEGORY_LIST, ROUTES_INDEX.CATEGORY_VIEW),
//     categoryViewController.userCategoryListPage
// );

categoryViewRouter.get(
    extractPath(
        CATEGORY_VIEW_ROUTES.CATEGORY_DETAIL,
        ROUTES_INDEX.CATEGORY_VIEW
    ),
    categoryViewController.userCategoryDetailPage
);

export default categoryViewRouter;
