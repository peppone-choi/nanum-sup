import { NextFunction, Request, Response } from "express";

export default class UserController {
  constructor() {}

  async getUsers(req: Request, res: Response, next: NextFunction) {
    res.send("유저 전체 리스트 확인");
  }
  async getUserDetail(req: Request, res: Response, next: NextFunction) {
    res.send("유저 상세 정보 확인");
  }
  async signIn(req: Request, res: Response, next: NextFunction) {
    res.send("회원가입");
  }
  async updateUser(req: Request, res: Response, next: NextFunction) {
    res.send("유저 정보 수정");
  }
  async deleteUser(req: Request, res: Response, next: NextFunction) {
    res.send("유저 삭제");
  }
}
