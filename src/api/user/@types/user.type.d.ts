interface IUser {
  id: string;
  accountId: string;
  email: string;
  password: string;
  salt: string;
  role: RoleType;
}

type RoleType = "admin" | "user";
