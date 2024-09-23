export class User implements IUser {
  id: string;
  accountId: string;
  email: string;
  password: string;
  salt: string;
  role: RoleType;
  constructor({ id, accountId, email, password, salt, role }: IUser) {
    this.id = id;
    this.accountId = accountId;
    this.email = email;
    this.password = password;
    this.salt = salt;
    this.role = role;
  }
}
