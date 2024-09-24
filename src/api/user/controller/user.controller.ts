import { NextFunction, Request, Response } from "express";
import { UserService } from "../service/user.service.type";
import UserResponseDto from "../dto/userResponse.dto";
/** 유저 */
// 회원가입 - signIn
// 프로필 조회 - getUserDetail
// 내 프로필 수정 - updateUser
// 탈퇴? - deleteUser

export default class UserController {
  private readonly _userService: UserService;
  constructor(userService: UserService) {
    this._userService = userService;
    this.getUsers = this.getUsers.bind(this);
    this.getUserDetail = this.getUserDetail.bind(this);
    this.signIn = this.signIn.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  async getUsers(
    req: Request<
      getUsersRequest["path"],
      getUsersResponse,
      getUsersRequest["body"],
      getUsersRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const users = await this._userService.getUsers();
    users.map((user) => new UserResponseDto(user));
    res.send(users);
  }
  async getUserDetail(
    req: Request<
      getUserDetailRequest["path"],
      getUserDetailResponse,
      getUserDetailRequest["body"],
      getUserDetailRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { userId } = req.params;
    const user = await this._userService.getUserDetail(userId);
    const userDto = user ? new UserResponseDto(user) : null;
    res.send(userDto);
  }
  async signIn(
    req: Request<
      createUserRequest["path"],
      createUserResponse,
      createUserRequest["body"],
      createUserRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { accountId, password, email, profile } = req.body;
    const user = await this._userService.signIn({
      accountId,
      password,
      email,
      role: "user",
      profile,
    });
    res.status(201).send(new UserResponseDto(user));
  }
  async updateUser(
    req: Request<
      updateUserRequest["path"],
      updateUserResponse,
      updateUserRequest["body"],
      updateUserRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    req.user;
    const { userId } = req.params;
    const { email, password, role, profile } = req.body;
    await this._userService.updateUser(
      req.user,
      userId,
      { email, role, profile },
      password
    );
    res.status(204).send();
  }
  async deleteUser(
    req: Request<
      deleteUserRequest["path"],
      deleteUserResponse,
      deleteUserRequest["body"],
      deleteUserRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { userId } = req.params;
    await this._userService.deleteUser(req.user, userId);
    res.status(204).send();
  }
}
