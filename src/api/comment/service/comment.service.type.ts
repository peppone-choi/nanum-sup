import { CommentResponseDTO } from "../dto/commentResponse.dto";

export interface CommentService {
  createComment( // userId: string,
    comment: Omit<IComment, "id">
  ): Promise<CommentResponseDTO>;
  editComment(
    commentId: string,
    putComment: Omit<IComment, "id">
  ): Promise<void>;

  getComment(): Promise<CommentResponseDTO[]>;

  deleteComment(commentId: string): Promise<void>;

  createCommentReply(
    parent: string,
    comment: Omit<IComment, "id">
  ): Promise<void>;
  getComments(postId: string): Promise<CommentResponseDTO[]>;
}
