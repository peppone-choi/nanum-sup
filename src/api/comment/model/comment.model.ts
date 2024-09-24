export class Comment implements IComment {
  id!: string;
  author!: IUser;
  post: IPost;

  constructor(params: IComment) {
    this.id = params.id;
    this.author = params.author;
    this.post = params.post;
  }
}
