import { CategoryResponseDTO } from "@/api/category/dto/categoryResponse.dto";
import { CommentResponseDTO } from "@/api/comment/dto/commentResponse.dto";
import UserResponseDto from "@/api/user/dto/userResponse.dto";
import { th } from "@faker-js/faker/.";

export class PostResponseDTO {
  postId: string;
  title: string;
  content: string;
  author: UserResponseDto;
  category: CategoryResponseDTO;
  shortUrl: string;
  createdAt: Date;
  comments: CommentResponseDTO[];

  constructor(params: IPost) {
    this.postId = params.id;
    this.title = params.title;
    this.content = params.content;
    this.author = new UserResponseDto(params.author);
    this.category = new CategoryResponseDTO(params.category);
    this.shortUrl = params.shortUrl;
    this.createdAt = params.createdAt;
    this.comments = params.comments.map((comment) => new CommentResponseDTO(comment));
  }
}
