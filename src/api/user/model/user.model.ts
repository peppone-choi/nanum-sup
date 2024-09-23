export class User implements IUser {
  id: string;
  userId: string;
  email: string;
  password: string;
  salt: string;
  refreshToken: string;
  role: string;
  constructor({
    id,
    userId,
    email,
    password,
    salt,
    refreshToken,
    role,
  }: IUser) {
    this.id = id;
    this.userId = userId;
    this.email = email;
    this.password = password;
    this.salt = salt;
    this.refreshToken = refreshToken;
    this.role = role;
  }
}
