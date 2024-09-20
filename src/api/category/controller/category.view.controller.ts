import { NextFunction, Request, Response } from "express";
import { CategoryService } from "../service/category.service.type";

export default class CategoryViewController {
    private readonly _categoryService: CategoryService;
    constructor(_categoryService: CategoryService) {
        this._categoryService = _categoryService;

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
        res.render("client/category/userCategoryList", {
            category: [
                {
                    categoryId: 1,
                    title: "영화 나눔숲",
                },
                {
                    categoryId: 2,
                    title: "운동 나눔숲",
                },
                {
                    categoryId: 3,
                    title: "개발 나눔숲",
                },
                {
                    categoryId: 4,
                    title: "맛집 나눔숲",
                },
                {
                    categoryId: 5,
                    title: "잡담",
                },
            ],
        });
    }

    /** 카테고리 상세 페이지 */
    async userCategoryDetailPage(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const category = await this._categoryService.getCategory();
        res.render("client/category/userCategoryDetail", { category });
    }
}
