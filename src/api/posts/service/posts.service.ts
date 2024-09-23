// import { Category } from '@/api/category/model/category.model';
import { CategoryRepository } from "@/api/category/repository/category.repository";
import { PostRepository } from "@/api/posts/repository/post.repository";
import HttpException from "@/api/common/exceptions/http.exception";
import { PostResponseDTO } from "@/api/posts/dto/postResponse.dto";
import { PostsService } from "@/api/posts/service/posts.service.type";
import { CommentRepository } from "@/api/comment/repository/comment.repository";
import { UserRepository } from "@/api/user/repository/user.repository";

// userRepository 가져오기
// commentRepository 가져오기

export class PostsServiceImpl implements PostsService {
  private readonly _postRepository: PostRepository;
  private readonly _userRepository: UserRepository;
  private readonly _categoryRepository: CategoryRepository;
   private readonly _commentRepository: CommentRepository;



  constructor(
    PostRepository: PostRepository, 
    UserRepository: UserRepository,
    CategoryRepository: CategoryRepository,
    CommentRepository: CommentRepository
  ) {


    this._postRepository = PostRepository;
    this._userRepository = UserRepository;
    this._categoryRepository = CategoryRepository;
    this._commentRepository = CommentRepository;
  }

  /** 게시글 생성 */ 
  async createPost(
    userId: string,
    categoryId: string,
    post: Omit<IPost, "id" | "author" | "comment">
  ): Promise<PostResponseDTO> {
    const author = await this._userRepository.getById(userId);
    const category = await this._categoryRepository.findById(categoryId);

    // if (!author) {
    //   throw new HttpException(404, "작성자를 찾을 수 없습니다.");
    // }

    if (!category) {
      throw new HttpException(404, "카테고리를 찾을 수 없습니다.");
    }

    const newPost = await this._postRepository.save({
      ...post,
       author,
      category,
     
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
    if (!post) {
      throw new HttpException(404, "게시글을 찾을 수 없습니다.");
    }

    // const comments = await this._commentRepository.findById(postId);
    return new PostResponseDTO(post);
  }

  /** 게시글 수정 */
  async updatePost(postId: string, updatedPost: Pick<IPost, "title" | "content" | "category">): Promise<void> {
    await this._postRepository.update(postId, updatedPost);
    return;
  }

    /** 게시글 삭제 */
  async deletePost(postId: string): Promise<void> {
    await this._postRepository.delete(postId);
  }
}
