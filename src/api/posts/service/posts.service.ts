// import { Category } from '@/api/category/model/category.model';
import { CategoryRepository } from "@/api/category/repository/category.repository";
import { PostRepository } from "@/api/posts/repository/post.repository";
import HttpException from "@/api/common/exceptions/http.exception";
import { PostResponseDTO } from "@/api/posts/dto/postResponse.dto";
import { PostsService } from "@/api/posts/service/posts.service.type";
import { CommentRepository } from "@/api/comment/repository/comment.repository";
import { UserRepository } from "@/api/user/repository/user.repository";
import { nanoid } from "nanoid";
import { L } from "@faker-js/faker/dist/airline-C5Qwd7_q";
import { LikeRepository } from "@/api/like/repository/like.repository";

// userRepository 가져오기
// commentRepository 가져오기

export class PostsServiceImpl implements PostsService {
  private readonly _postRepository: PostRepository;
  private readonly _userRepository: UserRepository;
  private readonly _categoryRepository: CategoryRepository;
  private readonly _commentRepository: CommentRepository;
  private readonly _likeRepository: LikeRepository;

  constructor(PostRepository: PostRepository, UserRepository: UserRepository, CategoryRepository: CategoryRepository, CommentRepository: CommentRepository, _likeRepository: LikeRepository) {
    this._postRepository = PostRepository;
    this._userRepository = UserRepository;
    this._categoryRepository = CategoryRepository;
    this._commentRepository = CommentRepository;
    this._likeRepository = _likeRepository;
  }

  /** 게시글 생성 */
  async createPost(userId: string, categoryId: string, post: Omit<IPost, "id" | "author" | "comment" | "shortUrl">): Promise<PostResponseDTO> {
    const author = await this._userRepository.getById(userId);
    const category = await this._categoryRepository.findById(categoryId);
    const shortUrl = nanoid(10);
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
      shortUrl,
    });

    return new PostResponseDTO(newPost);
  }

  /** 게시글 목록 조회 */
  async getPosts(page: number = 1, limit: number = 10): Promise<PostResponseDTO[]> {
    const posts = await this._postRepository.findAll(page, limit);
    return await Promise.all(posts.map((post) => new PostResponseDTO(post)));
  }

  /** 게시글 상세 조회 */
  async getPostDetail(postId: string): Promise<PostResponseDTO | null> {
    console.log(postId);
    const post = await this._postRepository.findById(postId);
    if (!post) {
      throw new HttpException(404, "게시글을 찾을 수 없습니다.");
    }

    // const comments = await this._commentRepository.findById(postId);
    return new PostResponseDTO(post);
  }

  /** 게시글 수정 */
  async updatePost(postId: string, title: string, content: string, category: string, pictures: string[], video: string): Promise<void> {
    const findCategory = await this._categoryRepository.findById(category);
    if (!findCategory) {
      throw new HttpException(404, "카테고리를 찾을 수 없습니다.");
    }
    await this._postRepository.update(postId, {
      title,
      content,
      category: findCategory,
      pictures,
      video,
    });
    return;
  }

  /** 게시글 삭제 */
  async deletePost(postId: string): Promise<void> {
    await this._postRepository.delete(postId);
  }
  async findByShortUrl(shortUrl: string): Promise<PostResponseDTO | null> {
    const post = await this._postRepository.findByShortUrl(shortUrl);
    if (!post) {
      throw new HttpException(404, "게시글을 찾을 수 없습니다.");
    }
    return new PostResponseDTO(post);
  }

  async findByCategoryId(categoryId: string): Promise<PostResponseDTO[]> {
    const posts = await this._postRepository.findByCategoryId(categoryId);
    return await Promise.all(posts.map((post) => new PostResponseDTO(post)));
  }
  async findByUserId(userId: string): Promise<PostResponseDTO[]> {
    const posts = await this._postRepository.findByUserId(userId);
    return await Promise.all(posts.map((post) => new PostResponseDTO(post)));
  }
  async likePost(postId: string, userId: string): Promise<void> {
    const post = await this._postRepository.findById(postId);
    if (!post) {
      throw new HttpException(404, "게시글을 찾을 수 없습니다.");
    }
    const user = await this._userRepository.getById(userId);
    if (!user) {
      throw new HttpException(404, "사용자를 찾을 수 없습니다.");
    }
    const like = await this._likeRepository.createLike(user);
    post.likes.push(like);
    await this._postRepository.update(postId, post);
  }

  async unlikePost(postId: string, userId: string, likeId: string): Promise<void> {
    const post = await this._postRepository.findById(postId);
    if (!post) {
      throw new HttpException(404, "게시글을 찾을 수 없습니다.");
    }
    const user = await this._userRepository.getById(userId);
    if (!user) {
      throw new HttpException(404, "사용자를 찾을 수 없습니다.");
    }
    const like = await this._likeRepository.getLike(likeId);
    if (!like) {
      throw new HttpException(404, "좋아요를 찾을 수 없습니다.");
    }
    console.log(like.user.accountId, user.accountId);

    if (like.user.id !== user.id) {
      throw new HttpException(403, "좋아요를 취소할 수 없습니다.");
    }
    post.likes = post.likes.filter((like) => like.id !== like.id);
    await this._postRepository.update(postId, post);
  }
}
