import IComment from "../@types/comment.type";
export class CommentResponseDTO {
  id!: string;
  author: {
    id: string;
    userName: string;
  };
  post!: {
    id: string;
  };

  constructor(params: IComment) {
    this.id = params.id;
    this.author = {
      id: params.author.id,
      userName: params.author.profile.firstName,
    };
  }
}
