import { CategoryRepository } from "@/api/category/repository/category.repository";
import { Category } from "@/api/category/model/category.model";
import HttpException from "@/api/common/exceptions/http.exception";

export class MemoryCategoryRepository implements CategoryRepository {
    static index = 0;
    static readonly store: Map<string, ICategory> = new Map();

    async save(category: Omit<ICategory, "id">): Promise<ICategory> {
        const newCategory = new Category({
            ...category,
            id: `category-${MemoryCategoryRepository.index++}`,
        });

        MemoryCategoryRepository.store.set(newCategory.id, newCategory);
        return newCategory;
    }

    async findAll(): Promise<ICategory[]> {
        const values = Array.from(MemoryCategoryRepository.store.values());
        return values;
    }

    async findById(id: string): Promise<ICategory | null> {
        const findCategory = MemoryCategoryRepository.store.get(id);
        return findCategory ?? null;
    }

    async update(
        categoryId: string,
        updateCategoryInfo: Partial<ICategory>
    ): Promise<ICategory> {
        const findCategory = MemoryCategoryRepository.store.get(categoryId);

        if (!findCategory) {
            throw new HttpException(404, "카테고리를 찾을 수 없습니다.");
        }

        MemoryCategoryRepository.store.set(categoryId, {
            ...findCategory,
            ...updateCategoryInfo,
        });
        return MemoryCategoryRepository.store.get(categoryId)!;
    }

    async delete(categoryId: string): Promise<void> {
        const findCategory = MemoryCategoryRepository.store.get(categoryId);
        if (!findCategory) {
            throw new HttpException(404, "카테고리를 찾을 수 없습니다.");
        }
        MemoryCategoryRepository.store.delete(categoryId);
    }
}
