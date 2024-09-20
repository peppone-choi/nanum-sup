import IComment from "../@types/comment.type";
export interface CommentRepository {
    /** 카테고리 생성 */
    save(cateogory: Omit<IComment, "id">): Promise<IComment>;
    /** 카테고리 목록 조회 */
    findAll(): Promise<IComment[]>;
    /** ID로 카테고리 상세 조회 */
    findById(id: string): Promise<IComment | null>;
    /** 카테고리 수정 */
    update(
        commentId: string,
        updateCommentInfo: Partial<IComment>
    ): Promise<IComment>;
    /** 카테고리 삭제 */
    delete(commentId: string): Promise<void>;
}
