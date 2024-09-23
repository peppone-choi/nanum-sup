export class PostResponseDTO {
  postId: string;
  title: string;
  content: string;
  author: {
    id: string;
    // userName: string;
  };
  category: {
    id: string;
  };
  comments: string[];

  constructor(params: IPost) {
    this.postId = params.id;
    this.title = params.title;
    this.content = params.content;
    this.author = {
      id: params.author.id,
      // userName: params.author.profile.firstName,
    };
    this.category = {
      id: params.category.id,
    };
    this.comments = params.comments;
  }
}