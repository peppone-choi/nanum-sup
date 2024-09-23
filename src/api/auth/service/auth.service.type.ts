export type LoginResponseType = {
  accessToken: string;
};

export interface AuthService {
  login(accountId: string, password: string): Promise<LoginResponseType>;
  adminLogin(accountId: string, password: string): Promise<LoginResponseType>;
}
