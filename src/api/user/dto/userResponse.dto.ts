export default class UserResponseDto {
  userId: string;
  email: string;
  role: string;
  constructor(user: IUser) {
    this.userId = user.userId;
    this.email = user.email;
    this.role = user.role;
  }
}
