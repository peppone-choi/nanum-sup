import { Request, Response, NextFunction } from "express";
import HttpException from "../exceptions/http.exception";
import { JwtService } from "../services/jwt.service";

/** 쿠키속 토큰으로 인증하는 인증 미들웨어 */
export const authCookieViewMiddleware = (authRedirect: boolean = true) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.cookies.accessToken;

      const tokenValue = token.split("Bearer ")[1];

      if (!token) {
        req.user = {
          userId: "",
          role: "user",
        };

        if (authRedirect) {
          throw new HttpException(401, "인증 실패");
        }

        next();
        return;
      }

      const payload = JwtService.verifyAccessToken(tokenValue);

      req.user = {
        userId: payload.userId,
        role: payload.role,
      };

      next();
    } catch (error: any) {
      // next(new HttpException(401, `인증 실패 ${error.message}`));
      res.status(302).redirect(`/auth/login?redirect=${req.originalUrl || ""}`);
    }
  };
};
