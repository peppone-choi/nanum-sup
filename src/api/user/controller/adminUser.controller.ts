import { NextFunction, Request, Response } from "express";
import { UserService } from '../service/user.service.type';
import UserResponseDto from '../dto/userResponse.dto';

export default class AdminUserController {
  private readonly _userService: UserService;
  constructor(userService: UserService) {
    this._userService = userService;
  }

  async getUsers(req: Request<getAdminUsersRequest["path"], getAdminUsersResponse, getAdminUsersRequest["body"], getAdminUsersRequest["params"]>, res: Response, next: NextFunction) {
    const users = await this._userService.getUsers();
    const usersDto = users.map((user) => (new UserResponseDto(user)));
    res.send(usersDto);
  }
  async getUserDetail(req: Request<getAdminUserDetailRequest["path"], getAdminUsersResponse, getAdminUserDetailRequest["body"], getAdminUserDetailRequest["params"] >, res: Response, next: NextFunction) {
    const { userId } = req.params;
    const user = await this._userService.getUserDetail(userId);
    const userDto = user ? new UserResponseDto(user) : null;
    res.send(userDto);
  }
  async createUser(req: Request, res: Response, next: NextFunction) {
    const {userId, password, email} = req.body;
    const saltedPassword = 
    const user = await this._userService.signIn({userId, password, email, role: "user"});
  }
  async updateUser(req: Request, res: Response, next: NextFunction) {
    res.send("[관리자] 유저 정보 수정");
  }
  async deleteUser(req: Request, res: Response, next: NextFunction) {
    res.send("[관리자] 유저 삭제");
  }
}
