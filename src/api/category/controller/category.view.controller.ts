import { NextFunction, Request, Response } from "express";
import { CategoryService } from "../service/category.service.type";

export default class CategoryViewController {
    private readonly _categoryService: CategoryService;
    constructor(_categoryService: CategoryService) {
        this._categoryService = _categoryService;

        this.categoryListPage = this.categoryListPage.bind(this);
        this.categoryDetailPage = this.categoryDetailPage.bind(this);
    }

    /** 카테고리 목록 페이지 */
    async categoryListPage(req: Request, res: Response, next: NextFunction) {
        const category = await this._categoryService.getCategory();
        res.render("client/category/categoryList", {
            category,
        });
    }

    /** 카테고리 상세 페이지 */
    async categoryDetailPage(req: Request, res: Response, next: NextFunction) {
        const category = await this._categoryService.getCategory();
        res.render("client/category/categoryDetail", { category });
    }
}
