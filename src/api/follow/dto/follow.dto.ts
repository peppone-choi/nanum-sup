import UserResponseDto from "@/api/user/dto/userResponse.dto";

export default class FollowResponseDto {
  id: string;
  from: UserResponseDto;
  to: UserResponseDto;
  createdAt: Date;
  constructor(params: IFollow) {
    this.id = params.id;
    this.from = new UserResponseDto(params.from);
    this.to = new UserResponseDto(params.to);
    this.createdAt = params.createdAt;
  }
}
