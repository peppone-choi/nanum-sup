import { CommentResponseDTO } from "@/api/comment/dto/commentResponse.dto";
import { CommentRepository } from "@/api/comment/repository/comment.repository";
import { CommentService } from "@/api/comment/service/comment.service.type";

export default class CommentServiceImpl implements CommentService {
  constructor(private readonly _commentRepository: CommentRepository) {
    this._commentRepository = _commentRepository;
  }

  async createComment(
    // userId: string,
    comment: Omit<IComment, "id">
  ): Promise<CommentResponseDTO> {
    // 댓글 생성
    // 1. 작성자를 찾는다.
    // 2. 작성자가 없으면 에러를 던져준다.
    // 3. 작성자가 있으면, 댓글 생성한다.

    //작성자 찾기
    //     const author = await this._userRepository.findById(userId);
    //     if (!author) {
    //         throw new HttpException(404, "작성자를 찾을 수 없습니다.");
    //       }
    const newComment = await this._commentRepository.save({
      ...comment,
    });
    return new CommentResponseDTO(newComment);
  }

  async getComment(): Promise<CommentResponseDTO[]> {
    const comments = await this._commentRepository.findAll();
    return comments.map((comment) => new CommentResponseDTO(comment));
  }

  async editComment(
    commentId: string,
    updatedComment: Omit<IComment, "id">
  ): Promise<void> {
    await this._commentRepository.update(commentId, updatedComment);

    return;
  }
  async deleteComment(commentId: string): Promise<void> {
    await this._commentRepository.delete(commentId);
  }

  async createCommentReply(
    parent: string,
    comment: Omit<IComment, "id">
  ): Promise<void> {
    await this._commentRepository.saveReply(parent, comment);
  }
}
