export default class Like implements ILike {
  id: string;
  user: IUser;
  constructor(like: ILike) {
    this.id = like.id;
    this.user = like.user;
  }
}
