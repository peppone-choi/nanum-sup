import { NextFunction, Request, Response } from "express";
import { CategoryService } from "../service/category.service.type";

export default class AdminCategoryViewController {
    private readonly _categoryService: CategoryService;
    constructor(_categoryService: CategoryService) {
        this._categoryService = _categoryService;

        this.categoryListPage = this.categoryListPage.bind(this);
        this.categoryDetailPage = this.categoryDetailPage.bind(this);
        this.categoryWritePage = this.categoryWritePage.bind(this);
        this.categoryEditPage = this.categoryEditPage.bind(this);
    }

    /** 카테고리 목록 페이지 */
    async categoryListPage(req: Request, res: Response, next: NextFunction) {
        res.render("admin/category/categoryList", {
            category: [
                {
                    categoryId: 1,
                    title: "카테고리 1",
                },
                {
                    categoryId: 2,
                    title: "카테고리 2",
                },
                {
                    categoryId: 2,
                    title: "카테고리 2",
                },
                {
                    categoryId: 2,
                    title: "카테고리 2",
                },
                {
                    categoryId: 2,
                    title: "카테고리 2",
                },
            ],
        });
    }

    /** 카테고리 상세 페이지 */
    async categoryDetailPage(req: Request, res: Response, next: NextFunction) {
        res.render("admin/category/categoryDetail");
    }

    /** 카테고리 생성 페이지 */
    async categoryWritePage(req: Request, res: Response, next: NextFunction) {
        res.render("admin/category/categoryWrite");
    }

    /** 카테고리 수정 페이지 */
    async categoryEditPage(req: Request, res: Response, next: NextFunction) {
        res.render("admin/category/categoryEdit");
    }
}
