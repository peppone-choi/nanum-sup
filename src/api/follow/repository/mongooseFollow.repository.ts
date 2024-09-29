import { MongooseUser } from "@/api/user/model/user.schema";
import { MongooseFollow } from "../model/follow.schema";
import FollowRepository from "./follow.repository";
import HttpException from "@/api/common/exceptions/http.exception";

export default class MongooseFollowRepository implements FollowRepository {
  async getFollows(): Promise<IFollow[]> {
    const follows = await MongooseFollow.find();
    return follows;
  }
  async getFollowingByUserId(userId: string): Promise<IFollow[]> {
    const user = await MongooseUser.findById(userId);
    if (!user) {
      throw new HttpException(404, "사용자를 찾을 수 없습니다.");
    }
    const follows = await MongooseFollow.find({ from: user }).populate("from").populate("to");
    return follows;
  }
  async getFollowerByUserId(userId: string): Promise<IFollow[]> {
    const user = await MongooseUser.findById(userId);
    if (!user) {
      throw new HttpException(404, "사용자를 찾을 수 없습니다.");
    }
    const follows = await MongooseFollow.find({ to: user }).populate("from").populate("to");
    return follows;
  }
  async createFollow(follow: Omit<IFollow, "id">): Promise<IFollow> {
    const newFollow = new MongooseFollow(follow);
    await newFollow.save();
    return newFollow;
  }
  async deleteFollow(followId: string): Promise<void> {
    const follow = await MongooseFollow.findByIdAndDelete(followId);
    if (!follow) {
      throw new HttpException(404, "팔로우를 찾을 수 없습니다.");
    }
    return;
  }
}
