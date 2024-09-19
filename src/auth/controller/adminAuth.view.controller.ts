import { NextFunction, Request, Response } from "express";
import { AuthService } from "@/api/auth/service/auth.service.type";
import { UserService } from "@/api/users/service/users.service.type";

export default class AdminAuthViewController {
  private readonly _authService: AuthService;

  constructor(authService: AuthService) {
    this._authService = authService;
    this.login = this.login.bind(this);
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      const result = await this._authService.login(email, password);

      res
        .status(200)
        .setHeader("Authorization", `Bearer ${result.accessToken}`)
        .setHeader(
          `Set-Cookie`,
          `accessToken=Bearer ${result.accessToken}; Path=/; HttpOnly`
        )
        .redirect("/admin/users");
    } catch (error: any) {
      // next(error);
      res.status(401).send(`
        <script>alert('${error.message}'); location.href='/admin/auth/login';</script>`);
    }
  }

  /** 로그인 페이지 */
  async loginPage(req: Request, res: Response, next: NextFunction) {
    res.render("admin/auth/login");
  }
}
