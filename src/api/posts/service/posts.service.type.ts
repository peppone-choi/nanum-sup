import { PostResponseDTO } from "@/api/posts/dto/postResponse.dto";
// import { IPost } from "../@types/post.type";

export interface PostsService {
  /** 게시글 생성 */
  createPost(userId: string, categoryId: string, post: Omit<IPost, "id" | "author" | "comments" | "category" | "createdAt" | "shortUrl" | "likes">): Promise<PostResponseDTO>;
  /** 게시글 목록 조회 */
  getPosts(): Promise<PostResponseDTO[]>;
  /** 게시글 상세 조회 */
  getPostDetail(id: string): Promise<PostResponseDTO | null>;
  /** 게시글 수정 */
  updatePost(postId: string, title: string, content: string, category: string, pictures: string[], video: string): Promise<void>;
  /** 게시글 삭제 */
  deletePost(postId: string): Promise<void>;
  findByShortUrl(shortUrl: string): Promise<PostResponseDTO | null>;
  findByCategoryId(categoryId: string): Promise<PostResponseDTO[]>;
  findByUserId(userId: string): Promise<PostResponseDTO[]>;
  likePost(postId: string, userId: string): Promise<void>;
  unlikePost(postId: string, userId: string, likeId: string): Promise<void>;
}
