import { NextFunction, Request, Response } from "express";
import { UserService } from "@/api/user/service/user.service.type";

export default class AdminUserViewController {
  private _userService: UserService;
  constructor(userService: UserService) {
    this._userService = userService;
    this.userListPage = this.userListPage.bind(this);
    this.userAddPage = this.userAddPage.bind(this);
    this.userEditPage = this.userEditPage.bind(this);
    this.userDetailPage = this.userDetailPage.bind(this);
  }

  async userListPage(req: Request, res: Response, next: NextFunction) {
    try {
      res.render("admin/users/userList");
    } catch (error) {
      next(error);
    }
  }

  async userAddPage(req: Request, res: Response, next: NextFunction) {
    try {
      res.render("admin/user/userAdd");
    } catch (error) {
      next(error);
    }
  }

  async userEditPage(req: Request, res: Response, next: NextFunction) {
    try {
      res.render("admin/users/userEdit");
    } catch (error) {
      next(error);
    }
  }

  async userDetailPage(req: Request, res: Response, next: NextFunction) {
    try {
      res.render("admin/users/userDetail");
    } catch (error) {
      next(error);
    }
  }
}
