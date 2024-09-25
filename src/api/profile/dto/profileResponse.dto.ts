export default class ProfileResponseDto {
  nickname: string;
  bio?: string;
  thumbnail?: string;
  headerThumbnail?: string;
  constructor(profile: IProfile) {
    this.nickname = profile.nickname;
    this.bio = profile.bio;
    this.thumbnail = profile.thumbnail;
    this.headerThumbnail = profile.headerThumbnail;
  }
}
