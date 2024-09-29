import UserResponseDto from "../dto/userResponse.dto";

export interface UserService {
  /** 유저 전체 리스트 확인 */
  getUsers(): Promise<UserResponseDto[]>;
  /** 유저 상세 정보 확인 */
  getUserDetail(id: string): Promise<UserResponseDto>;
  /** 회원가입 */
  signIn(user: Omit<IUser, "id" | "salt">): Promise<UserResponseDto>;
  /** 유저 정보 수정 */
  updateUser(
    _tokenInfo: {
      userId: string;
      role: string;
    },
    id: string,
    updateData: Omit<IUser, "id" | "accountId" | "salt" | "password">,
    password?: string
  ): Promise<void>;
  /** 유저 삭제 */
  deleteUser(
    _tokenInfo: {
      userId: string;
      role: string;
    },
    id: string
  ): Promise<void>;
}
