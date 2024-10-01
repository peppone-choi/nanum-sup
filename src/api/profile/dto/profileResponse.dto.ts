export default class ProfileResponseDto {
  id: string;
  nickname: string;
  bio?: string;
  thumbnail?: string;
  headerThumbnail?: string;
  constructor(profile: IProfile) {
    this.id = profile.id;
    this.nickname = profile.nickname;
    this.bio = profile.bio;
    this.thumbnail = profile.thumbnail;
    this.headerThumbnail = profile.headerThumbnail;
  }
}
