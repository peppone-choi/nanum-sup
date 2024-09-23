import { NextFunction, Request, Response } from "express";
import { UserService } from "../service/user.service.type";
import UserResponseDto from "../dto/userResponse.dto";
import { CryptoService } from "@/api/common/services/crypto.service";
import HttpException from "@/api/common/exceptions/http.exception";

export default class AdminUserController {
  private readonly _userService: UserService;
  constructor(userService: UserService) {
    this._userService = userService;
  }

  async getAdminUsers(
    req: Request<
      getAdminUsersRequest["path"],
      getAdminUsersResponse,
      getAdminUsersRequest["body"],
      getAdminUsersRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const users = await this._userService.getUsers();
    const usersDto = users.map((user) => new UserResponseDto(user));
    res.send(usersDto);
  }
  async getAdminUserDetail(
    req: Request<
      getAdminUserDetailRequest["path"],
      getAdminUsersResponse,
      getAdminUserDetailRequest["body"],
      getAdminUserDetailRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { userId } = req.params;
    const user = await this._userService.getUserDetail(userId);
    const userDto = user ? new UserResponseDto(user) : null;
    res.send(userDto);
  }
  async createAdminUser(
    req: Request<
      createAdminUserRequest["path"],
      createAdminUserResponse,
      createAdminUserRequest["body"],
      createAdminUserRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { accountId, password, email } = req.body;
    const user = await this._userService.signIn({
      accountId,
      password,
      email,
      role: "user",
    });
    res.status(201).send(new UserResponseDto(user));
  }
  async updateAdminUser(
    req: Request<
      updateAdminUserRequest["path"],
      updateAdminUserResponse,
      updateAdminUserRequest["body"],
      updateAdminUserRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { userId } = req.params;
    const { email, role, password } = req.body;
    await this._userService.updateUser(
      req.user,
      userId,
      {
        email,
        role,
      },
      password
    );
    res.status(204).send;
  }
  async deleteAdminUser(
    req: Request<
      deleteAdminUserRequest["path"],
      deleteAdminUserResponse,
      deleteAdminUserRequest["body"],
      deleteAdminUserRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { userId } = req.params;
    await this._userService.deleteUser(req.user, userId);
    res.status(204).send;
  }
}
