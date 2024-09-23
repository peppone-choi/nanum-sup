interface IProfile {
  /** 프로필 ID */
  id: string;
  /** 닉네임 */
  nickname: string;
  /** 소개글 */
  bio?: string;
  /** 프로필 이미지 */
  thumbnail?: string;
  /** 프로필 헤더 이미지 */
  headerThumbnail?: string;
}
