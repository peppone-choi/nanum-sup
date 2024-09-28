export default class Follow implements IFollow {
  id: string;
  from: IUser;
  to: IUser;
  createdAt: Date;
  constructor(params: IFollow) {
    this.id = params.id;
    this.from = params.from;
    this.to = params.to;
    this.createdAt = params.createdAt;
  }
}
