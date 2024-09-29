interface IFollow {
  /** 팔로우 ID */
  id: string;
  /** 팔로우하는 사용자 */
  from: IUser;
  /** 팔로우 받는 사용자 */
  to: IUser;
  /** 팔로우한 날짜 */
  createdAt: Date;
}
