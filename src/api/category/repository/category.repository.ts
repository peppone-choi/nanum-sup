export interface CategoryRepository {
    /** 카테고리 생성 */
    save(cateogory: Omit<ICategory, "id">): Promise<ICategory>;
    /** 카테고리 목록 조회 */
    findAll(): Promise<ICategory[]>;
    /** ID로 카테고리 상세 조회 */
    findById(id: string): Promise<ICategory | null>;
    /** 카테고리 수정 */
    update(
        categoryId: string,
        updateCategoryInfo: Partial<ICategory>
    ): Promise<ICategory>;
    /** 카테고리 삭제 */
    delete(categoryId: string): Promise<void>;
}
