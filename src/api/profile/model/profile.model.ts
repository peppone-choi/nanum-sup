export class Profile implements IProfile {
  nickname: string;
  bio?: string | undefined;
  thumbnail?: string | undefined;
  headerThumbnail?: string | undefined;

  constructor(params: IProfile) {
    this.nickname = params.nickname;
    this.bio = params.bio;
    this.thumbnail = params.thumbnail;
    this.headerThumbnail = params.headerThumbnail;
  }
}
