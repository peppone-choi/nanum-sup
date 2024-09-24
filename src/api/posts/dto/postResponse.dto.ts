import { CategoryResponseDTO } from "@/api/category/dto/categoryResponse.dto";
import UserResponseDto from "@/api/user/dto/userResponse.dto";

export class PostResponseDTO {
  postId: string;
  title: string;
  content: string;
  author: UserResponseDto;
  category: CategoryResponseDTO;
  createdAt: Date;

  constructor(params: IPost) {
    this.postId = params.id;
    this.title = params.title;
    this.content = params.content;
    this.author = new UserResponseDto(params.author);
    this.category = new CategoryResponseDTO(params.category);
    this.createdAt = params.createdAt;
  }
}
