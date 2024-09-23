import { CryptoService } from "@/api/common/services/crypto.service";
import { UserRepository } from "../repository/user.repository";
import { UserService } from "./user.service.type";
import HttpException from "@/api/common/exceptions/http.exception";

export default class UserServiceImpl implements UserService {
  private readonly _userRepository: UserRepository;
  constructor(userRepository: UserRepository) {
    this._userRepository = userRepository;
  }
  async getUsers(): Promise<IUser[]> {
    return await this._userRepository.getList();
  }
  async getUserDetail(id: string): Promise<IUser> {
    return await this._userRepository.getById(id);
  }
  async signIn(user: Omit<IUser, "id" | "salt">): Promise<IUser> {
    const newPassword = CryptoService.encryptPassword(user.password);
    if (!newPassword || !newPassword.hashedPassword || !newPassword.salt) {
      throw new HttpException(500, "비밀번호 암호화에 실패했습니다.");
    }
    const newUser = {
      ...user,
      password: newPassword.hashedPassword,
      salt: newPassword.salt,
    };
    return await this._userRepository.create(newUser);
  }
  async updateUser(
    _tokenInfo: {
      userId: string;
      role: string;
    },
    id: string,
    updateData: Omit<IUser, "id" | "userId" | "salt" | "password">,
    password?: string
  ): Promise<void> {
    const user = await this._userRepository.getById(id);
    if (_tokenInfo["userId"] !== user.id && _tokenInfo["role"] !== "admin") {
      throw new HttpException(403, "권한이 없습니다.");
    }
    if (!user) {
      throw new HttpException(404, "유저가 존재하지 않습니다.");
    }
    if (password) {
      const newPassword = CryptoService.encryptPassword(password);
      if (!newPassword || !newPassword.hashedPassword || !newPassword.salt) {
        throw new HttpException(500, "비밀번호 암호화에 실패했습니다.");
      }
      return await this._userRepository.update(id, {
        ...updateData,
        salt: newPassword.salt,
        password: newPassword.hashedPassword,
      });
    }

    return await this._userRepository.update(id, {
      ...updateData,
      password: user.password,
      salt: user.salt,
    });
  }
  async deleteUser(
    _tokenInfo: {
      userId: string;
      role: string;
    },
    id: string
  ): Promise<void> {
    const user = await this._userRepository.getById(id);
    if (_tokenInfo["userId"] !== user.id && _tokenInfo["role"] !== "admin") {
      throw new HttpException(403, "권한이 없습니다.");
    }
    return this._userRepository.delete(id);
  }
}
