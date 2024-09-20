import IComment from "../@types/comment.type";

export class Comment implements IComment {
  id!: string;
  author: IUser;
  post: IPost;

  constructor(params: IComment) {
    this.id = params.id;
    this.post = params.post;
  }
}
