import { CategoryResponseDTO } from "../dto/categoryResponse.dto";
import { CategoryService } from "./category.service.type";

export class CategoryServiceImpl implements CategoryService {
    async createCategory(): Promise<CategoryResponseDTO> {
        throw new Error("Method not implemented.");
    }
    async getCategory(): Promise<CategoryResponseDTO[]> {
        throw new Error("Method not implemented.");
    }
    async getCategoryDetail(): Promise<CategoryResponseDTO | null> {
        throw new Error("Method not implemented.");
    }
    async updateCategory(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async deleteCategory(): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
