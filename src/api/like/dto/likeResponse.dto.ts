import UserResponseDto from "@/api/user/dto/userResponse.dto";
import { CommentResponseDTO } from "@/api/comment/dto/commentResponse.dto";
import { PostResponseDTO } from "@/api/posts/dto/postResponse.dto";

export default class LikeResponseDto {
  id: string;
  type: "post" | "comment";
  post?: PostResponseDTO;
  comment?: CommentResponseDTO;
  user: UserResponseDto;
  constructor(like: ILike) {
    this.id = like.id;
    this.type = like.type;
    this.post = like.post && new PostResponseDTO(like.post);
    this.comment = like.comment && new CommentResponseDTO(like.comment);
    this.user = new UserResponseDto(like.user);
  }
}
