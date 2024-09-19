import { NextFunction, Request, Response } from "express";
import { AuthService } from "@/api/auth/service/auth.service.type";

export default class AuthController {
  private readonly _authService: AuthService;
  constructor(authService: AuthService) {
    this._authService = authService;
    this.login = this.login.bind(this);
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      const result = await this._authService.login(email, password);

      res.send(result);
    } catch (error) {
      next(error);
    }
  }
}
