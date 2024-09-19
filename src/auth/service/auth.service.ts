import { CryptoService } from "@/api/common/services/crypto.service";
import {
  AuthService,
  LoginResponseType,
} from "@/api/auth/service/auth.service.type";
import { UserRepository } from "@/api/users/repository/user/user.repository";
import HttpException from "@/api/common/exceptions/http.exception";
import { JwtService } from "@/api/common/services/jwt.service";

export class AuthServiceImpl implements AuthService {
  private readonly _userRepository: UserRepository;
  constructor(userRepository: UserRepository) {
    this._userRepository = userRepository;
  }
  async adminLogin(
    email: string,
    password: string
  ): Promise<LoginResponseType> {
    const findUser = await this._userRepository.findByEmail(email);

    if (!findUser) {
      throw new HttpException(404, "존재하지 않는 회원입니다.");
    }

    const isSamePassword = CryptoService.matchPassword(
      password,
      findUser?.password || "",
      findUser.salt ?? ""
    );

    if (!isSamePassword) {
      throw new HttpException(401, "비밀번호가 일치하지 않습니다.");
    }

    if (findUser.role !== "admin") {
      throw new HttpException(403, "관리자가 아닙니다.");
    }

    const accessToken = JwtService.generateAccessToken({
      role: findUser.role,
      userId: findUser.id,
      expiresIn: "7d",
    });

    return {
      accessToken,
    };
  }

  async login(email: string, password: string): Promise<LoginResponseType> {
    const findUser = await this._userRepository.findByEmail(email);

    if (!findUser) {
      throw new HttpException(404, "존재하지 않는 회원입니다.");
    }

    const isSamePassword = CryptoService.matchPassword(
      password,
      findUser?.password || "",
      findUser.salt ?? ""
    );

    if (!isSamePassword) {
      throw new HttpException(401, "비밀번호가 일치하지 않습니다.");
    }

    const accessToken = JwtService.generateAccessToken({
      role: findUser.role,
      userId: findUser.id,
      expiresIn: "7d",
    });

    return {
      accessToken,
    };
  }
}
