import { IPost } from "@/api/posts/@types/post.type";

export class Category implements ICategory {
  id: string;
  title: string;
  post: IPost[];
  // author: IUser;

  constructor(params: ICategory) {
    this.id = params.id;
    this.title = params.title;
    this.post = params.post;
    // this.author = params.author;
  }
}
