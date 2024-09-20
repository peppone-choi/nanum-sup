import IComment from "../@types/comment.type";
export interface CommentRepository {
  /** 댓글 생성 */
  save(comment: Omit<IComment, "id">): Promise<IComment>;
  /** 카테고리 목록 조회 */
  findAll(): Promise<IComment[]>;
  /** ID로 코멘트 상세 조회 */
  findById(id: string): Promise<IComment | null>;
  /** 카테고리 수정 */
  update(id: string, updateCommentInfo: Partial<IComment>): Promise<IComment>;
  /** 카테고리 삭제 */
  delete(id: string): Promise<void>;
}
