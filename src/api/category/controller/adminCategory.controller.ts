import { NextFunction, Request, Response } from "express";

// [관리자]
// 카테고리 목록 조회 - getCategory
// 카테고리 등록 - createCategory
// 카테고리 수정 - updateCategory
// 카테고리 삭제 - deleteCategory

export default class AdminCategoryController {
    async getCategory(req: Request, res: Response, next: NextFunction) {
        try {
            res.send("카테고리 목록 조회 [관리자]");
        } catch (error) {
            next(error);
        }
    }
    async createCategory(req: Request, res: Response, next: NextFunction) {
        try {
            res.send("카테고리 등록 조회 [관리자]");
        } catch (error) {
            next(error);
        }
    }
    async updateCategory(req: Request, res: Response, next: NextFunction) {
        try {
            res.send("카테고리 수정 [관리자]");
        } catch (error) {
            next(error);
        }
    }
    async deleteCategory(req: Request, res: Response, next: NextFunction) {
        try {
            res.send("카테고리 삭제 [관리자]");
        } catch (error) {
            next(error);
        }
    }
}
