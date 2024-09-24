export class Comment implements IComment {
  id!: string;
  content: string;
  author!: IUser;
  post: IPost;
  parent?: IComment | undefined;
  depth!: number;

  constructor(params: IComment) {
    this.id = params.id;
    this.content = params.content;
    this.author = params.author;
    this.post = params.post;
    this.parent = params.parent;
    this.depth = params.depth;
  }
}
