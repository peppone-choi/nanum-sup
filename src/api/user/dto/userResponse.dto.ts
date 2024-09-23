export default class UserResponseDto {
  accountId: string;
  email: string;
  role: string;
  constructor(user: IUser) {
    this.accountId = user.accountId;
    this.email = user.email;
    this.role = user.role;
  }
}
