import { NextFunction, Request, Response } from "express";
import { CategoryService } from "../service/category.service.type";

// [관리자]
// 카테고리 목록 조회 - getCategory
// 카테고리 등록 - createCategory
// 카테고리 수정 - updateCategory
// 카테고리 삭제 - deleteCategory

export default class AdminCategoryController {
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
    async createCategory(req: Request, res: Response, next: NextFunction) {
        try {
            const createCategory = await this._categoryService.createCategory();
            res.send(createCategory);
        } catch (error) {
            next(error);
        }
    }
    async updateCategory(req: Request, res: Response, next: NextFunction) {
        try {
            await this._categoryService.updateCategory();
            res.status(204).json();
        } catch (error) {
            next(error);
        }
    }
    async deleteCategory(req: Request, res: Response, next: NextFunction) {
        try {
            await this._categoryService.deleteCategory();
            res.status(204).json();
        } catch (error) {
            next(error);
        }
    }
}
