import PostResponseDTO from "@/api/posts/dto/PostResponseDTO"

export interface PostsService {
  /** 게시글 생성 */
  createPost(): Promise<PostResponseDTO>;
  /** 게시글 목록 조회 */
  getPosts(): Promise<PostResponseDTO[]>;
  /** 게시글 생성 */
  getPostDetail(): Promise<PostResponseDTO | null>;
  /** 게시글 생성 */
  updatePost(): Promise<void>;
  /** 게시글 생성 */
  deletePost(): Promise<void>;
}