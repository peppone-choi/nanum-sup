import UserResponseDto from "@/api/user/dto/userResponse.dto";
import { PostResponseDTO } from "@/api/posts/dto/postResponse.dto";
export class CommentResponseDTO {
  id!: string;
  content!: string;
  author: UserResponseDto;
  createdAt!: Date;

  constructor(params: IComment) {
    this.id = params.id;
    this.content = params.content;
    this.author = new UserResponseDto(params.author);
    this.createdAt = params.createdAt;
  }
}
