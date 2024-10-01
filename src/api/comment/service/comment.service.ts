import { CommentResponseDTO } from "@/api/comment/dto/commentResponse.dto";
import { CommentRepository } from "@/api/comment/repository/comment.repository";
import { PostRepository } from "@/api/posts/repository/post.repository";
import { UserRepository } from "@/api/user/repository/user.repository";
import { CommentService } from "./comment.service.type";
import HttpException from "@/api/common/exceptions/http.exception";
import { th } from "@faker-js/faker/.";

export default class CommentServiceImpl implements CommentService {
  constructor(private readonly _commentRepository: CommentRepository, private readonly _userRepository: UserRepository, private readonly _postRepository: PostRepository) {
    this._commentRepository = _commentRepository;
    this._userRepository = _userRepository;
    this._postRepository = _postRepository;
  }

  async createComment(post: string, author: string, comment: Omit<IComment, "id" | "post" | "author">): Promise<CommentResponseDTO> {
    // 댓글 생성
    // 1. 작성자를 찾는다.
    // 2. 작성자가 없으면 에러를 던져준다.
    // 3. 작성자가 있으면, 댓글 생성한다.

    //작성자 찾기
    //     const author = await this._userRepository.findById(userId);
    //     if (!author) {
    //         throw new HttpException(404, "작성자를 찾을 수 없습니다.");
    //       }

    const findAuthor = await this._userRepository.getById(author);
    if (!findAuthor) {
      throw new HttpException(404, "작성자를 찾을 수 없습니다.");
    }

    const newComment = await this._commentRepository.save({
      author: findAuthor,
      ...comment,
    });

    try {
      await this._postRepository.addComment(post, newComment);
    } catch (error) {
      throw new HttpException(404, "게시글을 찾을 수 없습니다.");
    }

    return new CommentResponseDTO(newComment);
  }

  async getComment(): Promise<CommentResponseDTO[]> {
    const comments = await this._commentRepository.findAll();
    return comments.map((comment) => new CommentResponseDTO(comment));
  }

  async editComment(commentId: string, updatedComment: Omit<IComment, "id">): Promise<void> {
    await this._commentRepository.update(commentId, updatedComment);

    return;
  }
  async deleteComment(commentId: string): Promise<void> {
    await this._commentRepository.delete(commentId);
  }

  async createCommentReply(parent: string, comment: Omit<IComment, "id">): Promise<void> {
    await this._commentRepository.saveReply(parent, comment);
  }
}
