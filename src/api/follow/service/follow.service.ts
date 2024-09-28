import { IFollow } from "../@types/follow.type";
import { FollowService } from "./follow.service.type";

export default class FollowServiceImpl implements FollowService {
  constructor() {}
  async getFollows(): Promise<IFollow[]> {
    throw new Error("Method not implemented.");
  }
  async getFollowingByUserId(userId: string): Promise<IFollow[]> {
    throw new Error("Method not implemented.");
  }
  async getFollowerByUserId(userId: string): Promise<IFollow[]> {
    throw new Error("Method not implemented.");
  }
  async createFollow(from: string, to: string): Promise<IFollow> {
    throw new Error("Method not implemented.");
  }
  async deleteFollow(followId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
