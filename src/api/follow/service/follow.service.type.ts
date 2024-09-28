import { IFollow } from "../@types/follow.type";

export interface FollowService {
  getFollows(): Promise<IFollow[]>;
  getFollowingByUserId(userId: string): Promise<IFollow[]>;
  getFollowerByUserId(userId: string): Promise<IFollow[]>;
  createFollow(from: string, to: string): Promise<IFollow>;
  deleteFollow(followId: string): Promise<void>;
}
