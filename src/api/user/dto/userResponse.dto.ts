import ProfileResponseDto from "@/api/profile/dto/profileResponse.dto";
import { Profile } from "@/api/profile/model/profile.model";

export default class UserResponseDto {
  id: string;
  accountId: string;
  email: string;
  role: string;
  profile: ProfileResponseDto;
  constructor(user: IUser) {
    this.id = user.id;
    this.accountId = user.accountId;
    this.email = user.email;
    this.role = user.role;
    this.profile = new ProfileResponseDto(user.profile);
  }
}
