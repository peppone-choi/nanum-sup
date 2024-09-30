// import { IPost } from "../@types/post.type";

export interface PostRepository {
  /** 게시글 생성 */
  save(post: Omit<IPost, "id">): Promise<IPost>;
  /** 게시글 목록 조회 */
  findAll(): Promise<IPost[]>;
  /** 게시글 상세 조회 */
  findById(id: string): Promise<IPost | null>;
  /** 게시글 수정 */
  update(postId: string, updatePostInfo: Partial<IPost>): Promise<IPost>;
  /** 게시글 삭제 */
  delete(postId: string): Promise<void>;
  /** 단축 URL로 게시글 조회 */
  findByShortUrl(shortUrl: string): Promise<IPost | null>;
  /** 카테고리 ID로 게시글 조회 */
  findByCategoryId(categoryId: string): Promise<IPost[]>;
  /** 사용자 ID로 게시글 조회 */
  findByUserId(userId: string): Promise<IPost[]>;
  /** 댓글 추가 */
  addComment(postId: string, comment: IComment): Promise<IPost>;
}
