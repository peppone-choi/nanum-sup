import { NextFunction, Request, Response } from "express";
import { CategoryService } from "@/api/category/service/category.service.type";

// [관리자]
// 카테고리 목록 조회 - getCategory
// 카테고리 상세 조회 - getCategoryDetail
// 카테고리 생성 - createCategory
// 카테고리 수정 - updateCategory
// 카테고리 삭제 - deleteCategory

export default class AdminCategoryController {
  /** 컨트롤러 DI 구조 잡아주기 */
  private readonly _categoryService: CategoryService;
  constructor(_categoryService: CategoryService) {
    this._categoryService = _categoryService;

    this.getCategory = this.getCategory.bind(this);
    this.getCategoryDetail = this.getCategoryDetail.bind(this);
    this.createCategory = this.createCategory.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
  }

  async getCategory(
    req: Request<
      adminGetCategoryRequest["path"],
      adminGetCategoryResponse,
      adminGetCategoryRequest["body"],
      adminGetCategoryRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    try {
      const category = await this._categoryService.getCategory();
      res.send(category);
    } catch (error) {
      next(error);
    }
  }

  async getCategoryDetail(
    req: Request<
      adminGetCategoryDetailRequest["path"],
      adminGetCategoryDetailResponse,
      adminGetCategoryDetailRequest["body"],
      adminGetCategoryDetailRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    try {
      const categoryDetail = await this._categoryService.getCategoryDetail(
        req.params.categoryId
      );
      res.send(categoryDetail);
    } catch (error) {
      next(error);
    }
  }

  async createCategory(
    req: Request<
      adminCreateCategoryRequest["path"],
      adminCreateCategoryResponse,
      adminCreateCategoryRequest["body"],
      adminCreateCategoryRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { ...rest } = req.body;
    try {
      const createCategory = await this._categoryService.createCategory({
        title: rest.title,
      });
      res.status(201).send(createCategory);
    } catch (error) {
      next(error);
    }
  }

  async updateCategory(
    req: Request<
      adminUpdateCategoryRequest["path"],
      adminUpdateCategoryResponse,
      adminUpdateCategoryRequest["body"],
      adminUpdateCategoryRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { categoryId } = req.params;
    try {
      await this._categoryService.updateCategory(categoryId, req.body);
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }

  async deleteCategory(
    req: Request<
      adminDeleteCategoryRequest["path"],
      adminDeleteCategoryResponse,
      adminDeleteCategoryRequest["body"],
      adminDeleteCategoryRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { categoryId } = req.params;
    try {
      await this._categoryService.deleteCategory(categoryId);
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }
}
