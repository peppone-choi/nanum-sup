import { NextFunction, Request, Response } from "express";
import { CategoryService } from "../service/category.service.type";

// [유저]
// 카테고리 목록 조회 - getCategory
// 카테고리 상세 조회 - getCategoryDetail

export default class CategoryController {
    /** 컨트롤러 DI 구조 잡아주기 */
    private readonly _categoryService: CategoryService;
    constructor(_categoryService: CategoryService) {
        this._categoryService = _categoryService;
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
        try {
            const category = await this._categoryService.getCategoryDetail();
            res.send(category);
        } catch (error) {
            next(error);
        }
    }
}
