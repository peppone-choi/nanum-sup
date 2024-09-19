import { NextFunction, Request, Response } from "express";
import HttpException from "../exceptions/http.exception";
import { JwtService } from "../services/jwt.service";

/** 인증 & 인가 미들웨어 */
export const authRoleMiddleware = (roles: RoleType[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      // 헤더에서 토큰을 가져옵니다.
      const token = req.headers.authorization;

      // 토큰이 없으면 에러를 던집니다.
      if (!token) {
        throw new HttpException(401, "토큰이 없습니다.");
      }

      // 토큰에서 페이로드를 가져옵니다.
      const tokenValue = token.split("Bearer ")[1];

      // 페이로드에서 역할을 확인합니다.
      const payload = JwtService.verifyAccessToken(tokenValue);

      // 역할이 없으면 에러를 던집니다.
      if (!roles.includes(payload.role)) {
        throw new HttpException(403, "권한이 없습니다.");
      }

      req.user = {
        userId: payload.userId,
        role: payload.role,
      };

      next();
    } catch (error: any) {
      next(
        new HttpException(error.statusCode ?? 401, `인증 실패 ${error.message}`)
      );
    }
  };
};
