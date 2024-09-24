import HttpException from "@/api/common/exceptions/http.exception";
import { MongooseCategory } from "../model/category.schema";
import { CategoryRepository } from "./category.repository";

export class MongooseCategoryRepository implements CategoryRepository {
  async save(
    category: Omit<ICategory, "id" | "admin" | "subAdmin">
  ): Promise<ICategory> {
    const newCategory = new MongooseCategory(category);
    try {
      await newCategory.save();
    } catch (error: any) {
      throw new HttpException(400, error.message);
    }

    return newCategory;
  }

  async findAll(): Promise<ICategory[]> {
    const values = await MongooseCategory.find();

    return values;
  }
  async findById(id: string): Promise<ICategory | null> {
    const category = await MongooseCategory.findById(id);
    return category;
  }

  async update(
    categoryId: string,
    updateCategoryInfo: Partial<ICategory>
  ): Promise<ICategory> {
    const results = await MongooseCategory.findByIdAndUpdate(
      categoryId,
      updateCategoryInfo
    );
    if (!results) {
      throw new HttpException(404, "카테고리를 찾을 수 없습니다.");
    }
    return results;
  }

  async delete(categoryId: string): Promise<void> {
    await MongooseCategory.deleteOne({ _id: categoryId });

    return;
  }
}
