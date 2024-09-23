export class User implements IUser {
  id: string;
  accountId: string;
  email: string;
  password: string;
  salt: string;
  refreshToken?: string;
  role: string;
  constructor({
    id,
    accountId,
    email,
    password,
    salt,
    refreshToken,
    role,
  }: IUser) {
    this.id = id;
    this.accountId = accountId;
    this.email = email;
    this.password = password;
    this.salt = salt;
    this.refreshToken = refreshToken || "";
    this.role = role;
  }
}
