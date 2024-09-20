export interface PostRepository {
    /** 게시글 생성 */
    save(post: Omit<IPost, "id">): Promise<IPost>;
    /** 게시글 목록 조회 */
    findAll(): Promise<IPost[]>;
    /** 게시글 상세 조회 */
    findById(id: string): Promise<IPost | null>;
    /** 게시글 수정 */
    update(
        postId: string, 
        updatePostInfo: Partial<IPost>,
    ): Promise<IPost>;
    /** 게시글 삭제 */
    delete(postId: string): Promise<void>;
}