import { NextFunction, Request, Response } from "express";

// [유저]
// 카테고리 목록 조회 - getCategory

export default class CategoryController {
    async getCategory(req: Request, res: Response, next: NextFunction) {
        try {
            res.send("카테고리 목록 조회 [유저]");
        } catch (error) {
            next(error);
        }
    }
}
