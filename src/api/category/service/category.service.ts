import HttpException from "@/api/common/exceptions/http.exception";
import { CategoryResponseDTO } from "@/api/category/dto/categoryResponse.dto";
import { CategoryRepository } from "@/api/category/repository/category.repository";
import { CategoryService } from "@/api/category/service/category.service.type";

export class CategoryServiceImpl implements CategoryService {
    private readonly _categoryRepository: CategoryRepository;
    constructor(categoryRepository: CategoryRepository) {
        this._categoryRepository = categoryRepository;
    }

    async createCategory(
        // userId: string,
        category: Omit<ICategory, "id">
    ): Promise<CategoryResponseDTO> {
        // 카테고리 생성
        // 1. 작성자를 찾는다.
        // 2. 작성자가 없으면 에러를 던져준다.
        // 3. 작성자가 있으면, 카테고리 생성한다.

        //작성자 찾기
        //     const author = await this._userRepository.findById(userId);
        //     if (!author) {
        //         throw new HttpException(404, "작성자를 찾을 수 없습니다.");
        //       }
        const newCategory = await this._categoryRepository.save({
            ...category,
            // author,
        });
        return new CategoryResponseDTO(newCategory);
    }

    async getCategory(): Promise<CategoryResponseDTO[]> {
        const category = await this._categoryRepository.findAll();

        return await Promise.all(
            category.map((category) => new CategoryResponseDTO(category))
        );
    }

    async getCategoryDetail(
        categoryId: string
    ): Promise<CategoryResponseDTO | null> {
        const category = await this._categoryRepository.findById(categoryId);
        if (!category) {
            throw new HttpException(404, "카테고리를 찾을 수 없습니다.");
        }
        return new CategoryResponseDTO(category);
    }

    async updateCategory(
        categoryId: string,
        updatedCategory: Omit<ICategory, "id">
    ): Promise<void> {
        await this._categoryRepository.update(categoryId, updatedCategory);

        return;
    }
    async deleteCategory(categoryId: string): Promise<void> {
        await this._categoryRepository.delete(categoryId);
    }
}
