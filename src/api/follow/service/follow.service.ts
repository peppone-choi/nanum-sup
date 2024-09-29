import { th } from "@faker-js/faker/.";
import FollowRepository from "../repository/follow.repository";
import { FollowService } from "./follow.service.type";
import { UserRepository } from "@/api/user/repository/user.repository";
import HttpException from "@/api/common/exceptions/http.exception";
import FollowResponseDto from "../dto/follow.dto";
import { FollowsResponseDto } from "../dto/follows.dto";

export default class FollowServiceImpl implements FollowService {
  private readonly _followRepository: FollowRepository;
  private readonly _userRepository: UserRepository;
  constructor(_followRepository: FollowRepository, _userRepository: UserRepository) {
    this._followRepository = _followRepository;
    this._userRepository = _userRepository;
    this.getFollows = this.getFollows.bind(this);
    this.getFollowingByUserId = this.getFollowingByUserId.bind(this);
    this.getFollowerByUserId = this.getFollowerByUserId.bind(this);
    this.createFollow = this.createFollow.bind(this);
    this.deleteFollow = this.deleteFollow.bind(this);
  }
  async getFollows(): Promise<FollowResponseDto[]> {
    const follows = await this._followRepository.getFollows();
    return follows.map((follow) => {
      return new FollowResponseDto(follow);
    });
  }
  async getFollowingByUserId(userId: string): Promise<FollowsResponseDto> {
    const follows = await this._followRepository.getFollowingByUserId(userId);
    return new FollowsResponseDto({
      number: follows.length,
      follows: follows.map((follow) => {
        return new FollowResponseDto(follow);
      }),
    });
  }
  async getFollowerByUserId(userId: string): Promise<FollowsResponseDto> {
    const follows = await this._followRepository.getFollowerByUserId(userId);
    return new FollowsResponseDto({
      number: follows.length,
      follows: follows.map((follow) => {
        return new FollowResponseDto(follow);
      }),
    });
  }
  async createFollow(from: string, to: string): Promise<FollowResponseDto> {
    const userFrom = await this._userRepository.getById(from);
    const userTo = await this._userRepository.getById(to);
    if (!userFrom || !userTo) {
      throw new HttpException(404, "사용자를 찾을 수 없습니다.");
    }
    const follow: Omit<IFollow, "id"> = {
      from: userFrom,
      to: userTo,
      createdAt: new Date(),
    };
    const newFollow = await this._followRepository.createFollow(follow);
    return new FollowResponseDto(newFollow);
  }
  async deleteFollow(followId: string): Promise<void> {
    return this._followRepository.deleteFollow(followId);
  }
}
