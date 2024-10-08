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
  /** 단축 URL */
  shortUrl: string;
  /** 첨부파일 */
  attachmentsUrl?: string[];
  /** 작성일 */
  createdAt: Date;
  comments: IComment[];
  pictures?: string[];
  video?: string;
  likes: ILike[];
  // /** 수정일 */
  // updatedAt: Date;

  constructor(params: IPost) {
    this.id = params.id;
    this.title = params.title;
    this.content = params.content;
    this.author = params.author;
    this.category = params.category;
    this.shortUrl = params.shortUrl;
    this.attachmentsUrl = params.attachmentsUrl;
    this.createdAt = params.createdAt;
    this.comments = params.comments;
    this.pictures = params.pictures;
    this.video = params.video;
    this.likes = params.likes;
    // this.updatedAt = params.updatedAt;
  }
}
