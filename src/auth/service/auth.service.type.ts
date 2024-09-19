export type LoginResponseType = {
  accessToken: string;
};

export interface AuthService {
  login(email: string, password: string): Promise<LoginResponseType>;
  adminLogin(email: string, password: string): Promise<LoginResponseType>;
}
