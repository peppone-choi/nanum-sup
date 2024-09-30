import { CryptoService } from "@/api/common/services/crypto.service";
import { UserRepository } from "../repository/user.repository";
import { UserService } from "./user.service.type";
import HttpException from "@/api/common/exceptions/http.exception";
import { ProfileRepository } from "@/api/profile/repository/profile.repository";
import { fi, th } from "@faker-js/faker/.";
import UserResponseDto from "../dto/userResponse.dto";
import { r } from "@faker-js/faker/dist/airline-C5Qwd7_q";

export default class UserServiceImpl implements UserService {
  private readonly _userRepository: UserRepository;
  private readonly _profileRepository: ProfileRepository;
  constructor(userRepository: UserRepository, profileRepository: ProfileRepository) {
    this._userRepository = userRepository;
    this._profileRepository = profileRepository;
  }
  async getUsers(): Promise<UserResponseDto[]> {
    return (await this._userRepository.getList()).map((user) => {
      return new UserResponseDto(user);
    });
  }
  async getUserDetail(id: string): Promise<UserResponseDto> {
    return new UserResponseDto(await this._userRepository.getById(id));
  }
  async signIn(user: Omit<IUser, "id" | "salt">): Promise<UserResponseDto> {
    const newProfile = await this._profileRepository.save({
      nickname: user.profile.nickname,
      bio: user.profile.bio,
      thumbnail: user.profile.thumbnail,
      headerThumbnail: user.profile.headerThumbnail,
    });
    if (!newProfile) {
      throw new HttpException(500, "프로필 생성에 실패했습니다.");
    }
    await this._profileRepository.save(newProfile);
    const newPassword = CryptoService.encryptPassword(user.password);
    if (!newPassword || !newPassword.hashedPassword || !newPassword.salt) {
      throw new HttpException(500, "비밀번호 암호화에 실패했습니다.");
    }
    const newUser = {
      ...user,
      password: newPassword.hashedPassword,
      salt: newPassword.salt,
      profile: newProfile,
    };
    return new UserResponseDto(await this._userRepository.create(newUser));
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
      await this._userRepository.update(id, {
        ...updateData,
        salt: newPassword.salt,
        password: newPassword.hashedPassword,
      });
    }

    await this._userRepository.update(id, {
      ...updateData,
      password: user.password,
      salt: user.salt,
    });
    return;
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
    await this._userRepository.delete(id);
    return;
  }

  async existsByAccountId(accountId: string): Promise<boolean> {
    return this._userRepository.existsByAccountId(accountId);
  }
  async existsByEmail(email: string): Promise<boolean> {
    return this._userRepository.existsByEmail(email);
  }
  async existsByNickname(nickname: string): Promise<boolean> {
    return this._userRepository.existsByNickname(nickname);
  }
}
