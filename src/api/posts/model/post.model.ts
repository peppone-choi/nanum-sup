export class Post implements IPost {
  /** 게시글 ID */
  id: string;
  /** 게시글 제목 */
  title: string;
  /** 게시글 내용 */
  content: string;
  // /** 작성자 */
  author: IUser;
  /** 카테고리 */
  category: ICategory;

  constructor(params: IPost) {
    this.id = params.id;
    this.title = params.title;
    this.content = params.content;
    this.author = params.author;
    this.category = params.category;
  }
}
