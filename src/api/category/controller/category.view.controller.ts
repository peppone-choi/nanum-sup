import { NextFunction, Request, Response } from "express";
import { CategoryService } from "../service/category.service.type";
import { PostsService } from "@/api/posts/service/posts.service.type";

export default class CategoryViewController {
    private readonly _categoryService: CategoryService;
    private readonly _postService: PostsService;
    constructor(_categoryService: CategoryService, _postService: PostsService) {
        this._categoryService = _categoryService;
        this._postService = _postService;
        this.userCategoryListPage = this.userCategoryListPage.bind(this);
        this.userCategoryDetailPage = this.userCategoryDetailPage.bind(this);
    }

    /** 카테고리 목록 페이지 */
    async userCategoryListPage(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const category = await this._categoryService.getCategory();
        console.log(category);
        res.render("client/category/userCategoryList", {
            category,
        });
    }

    /** 카테고리 상세 페이지 */
    async userCategoryDetailPage(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const category = await this._categoryService.getCategory();
        const posts = await this._postService.getPosts();
        res.render("client/category/userCategoryDetail", { category, posts });
    }
}
