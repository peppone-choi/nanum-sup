import HttpException from "@/common/exceptions/http.exception";
import { PostResponseDTO } from "../dto/postResponse.dto";
import { PostRepository } from "../repository/post.repository";
import { PostsService } from "./posts.service.type";
// userRepository 가져오기


export class PostsServiceImpl implements PostsService {
  private readonly _postRepository: PostRepository;
  private readonly _userRepository: UserRepository;

  /** 게시글 생성 */
  async createPost(
    userId: string,
    post: Omit<IPost, "id" | "author">
  ): Promise<PostResponseDTO> {
    const author = await this._userRepository.findById(userId);

    if (!author) {
      throw new HttpException(404, "작성자를 찾을 수 없습니다.");
    }

    const newPost = await this._postRepository.save({
      ...post,
      author, 
    });
    return new PostResponseDTO(newPost);
  }
  /** 게시글 목록 조회 */
  async getPosts(): Promise<PostResponseDTO[]> {
    const posts = await this._postRepository.findAll();
    return await Promise.all(posts.map((post) => new PostResponseDTO(post)));
  }
  /** 게시글 상세 조회 */
  async getPostDetail(postId: string): Promise<PostResponseDTO | null> {
    const post = await this._postRepository.findById(postId);
    if(!post) {
      throw new HttpException(404, "게시글을 찾을 수 없습니다.")
    }
    return new PostResponseDTO(post);
  }

  /** 게시글 수정 */
  async updatePost(
    postId: string,
    updatedPost: Omit<IPost, "id" | "author">
  ): Promise<void> {
    await this._postRepository.update(postId, updatedPost);
    return;
  }
  async deletePost(postId: string): Promise<void> {
    await this._postRepository.delete(postId);
  }
  
}