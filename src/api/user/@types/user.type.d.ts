// type RoleType = "user" | "admin";

interface IUser {
  /** 고유 순번 아이디 */
  id: string;
  /** 로그인 아이디 */
  accountId: string;
  /** 이메일 */
  email: string;
  /** 비밀번호 */
  password: string;
  /** salt */
  salt: string;
  /** 암호화 */
  refreshToken?: string;
  /** 역할 */
  role: string;
  /** 프로필 */
  profile: IProfile;
}
