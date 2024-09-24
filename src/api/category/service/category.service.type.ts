import { CategoryResponseDTO } from "@/api/category/dto/categoryResponse.dto";

export interface CategoryService {
  /** 카테고리 생성 */
  createCategory(
    // userId: string,
    category: Omit<ICategory, "id" | "admin" | "subAdmin">
  ): Promise<CategoryResponseDTO>;
  /** 카테고리 조회 */
  getCategory(): Promise<CategoryResponseDTO[]>;
  /** 카테고리 상세 조회 */
  getCategoryDetail(id: string): Promise<CategoryResponseDTO | null>;
  /** 카테고리 수정 */
  updateCategory(
    categoryId: string,
    updateCategory: Omit<ICategory, "id">
  ): Promise<void>;
  /** 카테고리 삭제 */
  deleteCategory(categoryId: string): Promise<void>;
}
