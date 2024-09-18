import jwt, { Jwt } from "jsonwebtoken";

type Params = {
  userId: string;
  role?: string;
  expireIn: string;
};

export class JwtService {
  /** 액세스 토큰 생성 시 시크릿 */
  static readonly ACCESS_TOKEN_SECRET =
    process.env.ACCESS_SECRET || "accessToken";

  /** 리프레시 토큰 생성 시 시크릿 */
  static readonly REFRESH_TOKEN_SECRET =
    process.env.REFRESH_SECRET || "refreshToken";

  /** 액세스 토큰 검증 */
  static verifyAccessToken(token: string) {
    return jwt.verify(token, this.ACCESS_TOKEN_SECRET) as jwt.JwtPayload;
  }

  /** 리프레시 토큰 검증 */
  static verifyRefreshToken(token: string) {
    return jwt.verify(token, this.REFRESH_TOKEN_SECRET) as jwt.JwtPayload;
  }

  /** 액세스 토큰 생성 */
  static generateAccessToken({ userId, role, expireIn }: Params) {
    return jwt.sign(
      { userId, role: role ?? "user" },
      this.ACCESS_TOKEN_SECRET,
      { expiresIn: expireIn || "1h" }
    );
  }

  /** 리프레시 토큰 생성 */
  static generateRefreshToken({ userId, expireIn }: Params) {
    return jwt.sign({ userId }, this.REFRESH_TOKEN_SECRET, {
      expiresIn: expireIn || "14d",
    });
  }
}
