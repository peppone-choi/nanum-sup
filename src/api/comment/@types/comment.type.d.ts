interface IComment {
  /** 댓글 ID */
  id: string;
  content: string;
  // /** 작성자 (운영자,부운영자) */
  author: IUser;
  parent?: IComment;
  depth: number;
  createdAt: Date;
}

interface ICommentResponseDTO {
  /** 코멘트 ID */
  id: string;
  /** 코멘트 내용 */
  content: string;
  /** 작성자 */
  author: UserResponseDto;
  createdAt: Date;
}
