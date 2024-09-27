import HttpException from "@/api/common/exceptions/http.exception";
import { CategoryResponseDTO } from "@/api/category/dto/categoryResponse.dto";
import { CategoryRepository } from "@/api/category/repository/category.repository";
import { CategoryService } from "@/api/category/service/category.service.type";
import { UserRepository } from "@/api/user/repository/user.repository";
import { PostRepository } from "@/api/posts/repository/post.repository";

export class CategoryServiceImpl implements CategoryService {
    private readonly _categoryRepository: CategoryRepository;
    // private readonly _userRepository: UserRepository;
    // private readonly _postRepository: PostRepository;
    constructor(categoryRepository: CategoryRepository) {
        this._categoryRepository = categoryRepository;
        // this._postRepository = PostRepository;
        // this._userRepository = UserRepository;
    }

    async createCategory(
        // userId: string,
        category: Omit<ICategory, "id" | "admin" | "subAdmin">
    ): Promise<CategoryResponseDTO> {
        const newCategory = await this._categoryRepository.save({
            ...category,
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
