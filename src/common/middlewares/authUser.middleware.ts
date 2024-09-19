import { Request, Response, NextFunction } from "express";
import HttpException from "../exceptions/http.exception";
import { JwtService } from "../services/jwt.service";

/** 인증 미들웨어 */
export const authUserMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      throw new HttpException(401, "토큰이 없습니다.");
    }

    const tokenValue = token.split("Bearer ")[1];

    const payload = JwtService.verifyAccessToken(tokenValue);

    req.user = {
      userId: payload.userId,
      role: payload.role,
    };

    next();
  } catch (error: any) {
    next(new HttpException(401, `인증 실패 ${error.message}`));
  }
};
