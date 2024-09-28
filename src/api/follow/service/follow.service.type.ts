import FollowResponseDto from "../dto/follow.dto";
import { FollowsResponseDto } from "../dto/follows.dto";

export interface FollowService {
  getFollows(): Promise<FollowResponseDto[]>;
  getFollowingByUserId(userId: string): Promise<FollowsResponseDto>;
  getFollowerByUserId(userId: string): Promise<FollowsResponseDto>;
  createFollow(from: string, to: string): Promise<FollowResponseDto>;
  deleteFollow(followId: string): Promise<void>;
}
