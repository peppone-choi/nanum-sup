import UserResponseDto from "@/api/user/dto/userResponse.dto";
import { PostResponseDTO } from "@/api/posts/dto/postResponse.dto";
export class CommentResponseDTO {
  id!: string;
  author: UserResponseDto;
  post!: PostResponseDTO;

  constructor(params: IComment) {
    this.id = params.id;
    this.author = new UserResponseDto(params.author);
    this.post = new PostResponseDTO(params.post);
  }
}
