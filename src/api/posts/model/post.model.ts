import IComment from "@/api/comment/@types/comment.type";
import { IPost } from "../@types/post.type";

export class Post implements IPost {
  /** 게시글 ID */
  id: string;
  /** 게시글 제목 */
  title: string;
  /** 게시글 내용 */
  content: string;

  /** 작성자 */
  // author: IUser;
  author: string;
  /** 카테고리 */
  category: ICategory;
  /** 댓글 리스트 */
  comments: IComment[];

  constructor(params: IPost) {
    this.id = params.id;
    this.title = params.title;
    this.content = params.content;
    // this.author = params.author;
    // this.category = params.category;
    // this.comments = params.comments;
  }
}
