export default class Like implements ILike {
  id: string;
  type: "post" | "comment";
  post?: IPost;
  comment?: IComment;
  user: IUser;
  constructor(like: ILike) {
    this.id = like.id;
    this.type = like.type;
    this.post = like.post;
    this.comment = like.comment;
    this.user = like.user;
  }
}
