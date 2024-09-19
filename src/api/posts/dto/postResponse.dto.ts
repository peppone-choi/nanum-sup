export class PostResponseDTO {
  postId: string;
  title: string;
  content: string;
  author: {
    id: string;
    userName: string;
  };
  category: string;
  comments: string[];

  constructor(params: IPost) {
    this.postId = params.id;
    this.title = params.title;
    this.content = params.content;
    this.author = {
      id: params.author.id,
      userName: params.author.profile.firstName,
    };
    this.category = params.category;
    this.comments = params.comments;
  }
}