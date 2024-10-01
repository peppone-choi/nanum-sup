import { NextFunction, Request, Response } from "express";
import { UserService } from "../service/user.service.type";
import UserResponseDto from "../dto/userResponse.dto";
import { CryptoService } from "@/api/common/services/crypto.service";
import HttpException from "@/api/common/exceptions/http.exception";
import { get } from "http";

export default class AdminUserController {
  private readonly _userService: UserService;
  constructor(userService: UserService) {
    this._userService = userService;
    this.getAdminUsers = this.getAdminUsers.bind(this);
    this.getAdminUserDetail = this.getAdminUserDetail.bind(this);
    this.createAdminUser = this.createAdminUser.bind(this);
    this.updateAdminUser = this.updateAdminUser.bind(this);
    this.deleteAdminUser = this.deleteAdminUser.bind(this);
  }

  async getAdminUsers(req: Request<getAdminUsersRequest["path"], getAdminUsersResponse, getAdminUsersRequest["body"], getAdminUsersRequest["params"]>, res: Response, next: NextFunction) {
    const users = await this._userService.getUsers();
    res.send(users);
  }
  async getAdminUserDetail(
    req: Request<getAdminUserDetailRequest["path"], getAdminUsersResponse, getAdminUserDetailRequest["body"], getAdminUserDetailRequest["params"]>,
    res: Response,
    next: NextFunction
  ) {
    const { userId } = req.params;
    const user = await this._userService.getUserDetail(userId);
    res.send(user);
  }
  async createAdminUser(req: Request<createAdminUserRequest["path"], createAdminUserResponse, createAdminUserRequest["body"], createAdminUserRequest["params"]>, res: Response, next: NextFunction) {
    const { accountId, password, email, profile } = req.body;
    const user = await this._userService.signIn({
      accountId,
      password,
      email,
      role: "user",
      profile: profile,
    });
    res.status(201).send(user);
  }
  async updateAdminUser(req: Request<updateAdminUserRequest["path"], updateAdminUserResponse, updateAdminUserRequest["body"], updateAdminUserRequest["params"]>, res: Response, next: NextFunction) {
    const { userId } = req.params;
    const user = await this._userService.getUserDetail(userId);
    const { nickname, bio, thumbnail } = req.body;
    await this._userService.updateUser(req.user, userId, {
      nickname,
      bio,
      thumbnail,
    });
    res.status(204).send;
  }
  async deleteAdminUser(req: Request<deleteAdminUserRequest["path"], deleteAdminUserResponse, deleteAdminUserRequest["body"], deleteAdminUserRequest["params"]>, res: Response, next: NextFunction) {
    const { userId } = req.params;
    await this._userService.deleteUser(req.user, userId);
    res.status(204).send;
  }
}
