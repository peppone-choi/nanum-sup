import { NextFunction, Request, Response } from "express";
import { CategoryService } from "../service/category.service.type";
import { PostsService } from "../../posts/service/posts.service.type";
import { Category } from "../model/category.model";

export default class AdminCategoryViewController {
    private readonly _categoryService: CategoryService;
    // private readonly _postsService: PostsService;
    constructor(_categoryService: CategoryService) {
        this._categoryService = _categoryService;
        // this._postsService = _postService;

        this.categoryListPage = this.categoryListPage.bind(this);
        this.categoryDetailPage = this.categoryDetailPage.bind(this);
        this.categoryWritePage = this.categoryWritePage.bind(this);
        this.categoryEditPage = this.categoryEditPage.bind(this);
    }

    /** 카테고리 목록 페이지 */
    async categoryListPage(req: Request, res: Response, next: NextFunction) {
        const category = await this._categoryService.getCategory();
        res.render("admin/category/categoryList", { category });
    }

    /** 카테고리 상세 페이지 */
    async categoryDetailPage(req: Request, res: Response, next: NextFunction) {
        const category = await this._categoryService.getCategoryDetail(
            req.params.categoryId
        );
        // const posts = await this._postsService.getPosts();
        res.render("admin/category/categoryDetail", { category });
    }

    /** 카테고리 생성 페이지 */
    async categoryWritePage(req: Request, res: Response, next: NextFunction) {
        const category = await this._categoryService.getCategory();
        res.render("admin/category/categoryWrite", { category });
    }

    /** 카테고리 수정 페이지 */
    async categoryEditPage(req: Request, res: Response, next: NextFunction) {
        res.render("admin/category/categoryEdit");
    }
}
