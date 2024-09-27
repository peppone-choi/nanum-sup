import { NextFunction, Request, Response } from "express";
import { CategoryService } from "@/api/category/service/category.service.type";
import { PostsService } from "@/api/posts/service/posts.service.type";

// [유저]
// 카테고리 목록 조회 - getCategory
// 카테고리 상세 조회 - getCategoryDetail

export default class CategoryController {
    /** 컨트롤러 DI 구조 잡아주기 */
    private readonly _categoryService: CategoryService;
    private readonly _postsService: PostsService;
    constructor(_categoryService: CategoryService, _postService: PostsService) {
        this._categoryService = _categoryService;
        this._postsService = _postService;

        this.getCategory = this.getCategory.bind(this);
        this.getCategoryDetail = this.getCategoryDetail.bind(this);
    }
    async getCategory(req: Request, res: Response, next: NextFunction) {
        try {
            const category = await this._categoryService.getCategory();
            res.send(category);
        } catch (error) {
            next(error);
        }
    }
    async getCategoryDetail(req: Request, res: Response, next: NextFunction) {
        const { categoryId } = req.params;
        try {
            const category = await this._categoryService.getCategoryDetail(
                categoryId
            );
            res.send(category);
        } catch (error) {
            next(error);
        }
    }
}
