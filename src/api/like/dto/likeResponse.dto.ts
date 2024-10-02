import UserResponseDto from "@/api/user/dto/userResponse.dto";
import { CommentResponseDTO } from "@/api/comment/dto/commentResponse.dto";
import { PostResponseDTO } from "@/api/posts/dto/postResponse.dto";

export default class LikeResponseDto {
  id: string;
  user: UserResponseDto;
  constructor(like: ILike) {
    this.id = like.id;
    this.user = new UserResponseDto(like.user);
  }
}
