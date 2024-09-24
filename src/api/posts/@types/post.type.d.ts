interface IPost {
  /** 게시글 ID */
  id: string;
  /** 게시글 제목 */
  title: string;
  /** 게시글 내용 */
  content: string;
  // /** 작성자 */
  author: IUser;
  // author: string;
  /** 카테고리 */
  category: ICategory;
}
