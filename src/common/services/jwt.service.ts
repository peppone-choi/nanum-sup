// src/api/common/services/jwt.service.ts

import jwt from "jsonwebtoken";

type Params = {
  /** 유저 ID */
  userId: string;
  /** 역할 */
  role?: RoleType;
  /** 만료 시간 */
  expiresIn?: string;
};

export class JwtService {
  static readonly ACCESS_TOKEN_SECRET =
    process.env.ACCESS_TOKEN_SECRET || "access";
  static readonly REFRESH_TOKEN_SECRET =
    process.env.REFRESH_TOKEN_SECRET || "refresh";

  /** 엑세스 토큰 검증 */
  static verifyAccessToken(token: string) {
    const secret = this.ACCESS_TOKEN_SECRET;

    return jwt.verify(token, secret) as jwt.JwtPayload;
  }

  /** 리프레시 토큰 검증 */
  static verifyRefreshToken(token: string) {
    const secret = this.REFRESH_TOKEN_SECRET;

    return jwt.verify(token, secret) as jwt.JwtPayload;
  }

  /** 엑세스 토큰 발행 */
  static generateAccessToken(params: Params) {
    const { userId, expiresIn, role } = params;

    return jwt.sign(
      { userId, role: role ?? "user" },
      this.ACCESS_TOKEN_SECRET,
      {
        expiresIn: expiresIn || "1h",
      }
    );
  }

  /** 리프레시 토큰 발행 */
  static generateRefreshToken(params: Omit<Params, "role">) {
    const { userId, expiresIn } = params;
    return jwt.sign({ userId }, this.REFRESH_TOKEN_SECRET, {
      expiresIn: expiresIn || "14d",
    });
  }
}
