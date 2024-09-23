import IComment from "../@types/comment.type";
import { CommentResponseDTO } from "../dto/commentResponse.dto";

export interface CommentService {
  createComment( // userId: string,
    comment: Omit<IComment, "id">
  ): Promise<CommentResponseDTO>;
  editComment(commentId: string, putComment: Omit<IComment, "id">): Promise<void>;

  getComment(): Promise<CommentResponseDTO[]>;

  deleteComment(commentId: string): Promise<void>;
}
