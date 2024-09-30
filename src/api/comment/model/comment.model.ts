export class Comment implements IComment {
  id!: string;
  content: string;
  createdAt: Date;
  author!: IUser;
  parent?: IComment | undefined;
  depth!: number;

  constructor(params: IComment) {
    this.id = params.id;
    this.content = params.content;
    this.createdAt = params.createdAt;
    this.author = params.author;
    this.parent = params.parent;
    this.depth = params.depth;
  }
}
