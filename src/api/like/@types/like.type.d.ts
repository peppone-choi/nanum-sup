interface ILike {
  /** 좋아요 ID */
  id: string;
  /** 좋아요 타입 */
  type: "post" | "comment";
  // /** 게시글 */
  post?: IPost;
  //* 코멘트 */
  comment?: IComment;
  /** 사용자 */
  user: IUser;
}
