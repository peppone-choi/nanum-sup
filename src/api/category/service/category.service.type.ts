import { CategoryResponseDTO } from "../dto/categoryResponse.dto";

export interface CategoryService {
    /** 카테고리 생성 */
    createCategory(): Promise<CategoryResponseDTO>;
    /** 카테고리 조회 */
    getCategory(): Promise<CategoryResponseDTO[]>;
    /** 카테고리 수정 */
    updateCategory(): Promise<void>;
    /** 카테고리 삭제 */
    deleteCategory(): Promise<void>;
}
