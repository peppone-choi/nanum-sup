interface IComment {
  /** 댓글 ID */
  id: string;
  content: string;
  // /** 게시글 */
  post: IPost;
  // /** 작성자 (운영자,부운영자) */
  author: IUser;
  parent?: IComment;
  depth: number;
}

interface ICommentResponseDTO {
  /** 코멘트 ID */
  id: string;
  /** 게시글 */
  post: PostResponseDTO;
  author: UserResponseDto;
}
