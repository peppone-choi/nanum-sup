import HttpException from "@/api/common/exceptions/http.exception";
import { MongooseUser } from "../model/user.schema";
import { UserRepository } from "./user.repository";
import { MongooseProfile } from "@/api/profile/model/profile.schma";

export default class MongooseUserRepository implements UserRepository {
  async create(user: Omit<IUser, "id">): Promise<IUser> {
    const newUser = new MongooseUser(user);
    await newUser.save();
    return newUser;
  }
  async getList(): Promise<IUser[]> {
    const values = await MongooseUser.find().populate("profile");
    return values;
  }
  async getById(id: string): Promise<IUser> {
    const user = await MongooseUser.findById(id).populate("profile");
    if (!user) {
      throw new HttpException(404, "유저가 존재하지 않습니다.");
    }
    return user;
  }
  async getByNickname(nickname: string): Promise<IUser> {
    const profile = await MongooseProfile.findOne({
      nickname: nickname,
    });
    const user = await MongooseUser.findOne({
      profile: profile,
    }).populate("profile");
    if (!user) {
      throw new HttpException(404, "유저가 존재하지 않습니다.");
    }
    return user;
  }
  async update(id: string, updateData: Omit<IUser, "id" | "accountId" | "salt" | "password"> & { profile: Omit<IProfile, "id"> }): Promise<void> {
    const updatedUser = await MongooseUser.findByIdAndUpdate(id, updateData).populate("profile");
    if (!updatedUser) {
      throw new HttpException(404, "유저가 존재하지 않습니다.");
    }
    return;
  }
  async delete(id: string): Promise<void> {
    const user = await MongooseUser.findById(id).populate("profile");
    if (!user) {
      throw new HttpException(404, "유저가 존재하지 않습니다.");
    }
    await MongooseUser.deleteOne({ _id: id });
    return;
  }
  async findByAccountId(accountId: string): Promise<IUser> {
    const user = await MongooseUser.findOne({ accountId: accountId }).populate("profile");
    if (!user) {
      throw new HttpException(404, "유저가 존재하지 않습니다.");
    }
    return user;
  }
  async existsByAccountId(accountId: string): Promise<boolean> {
    const user = await MongooseUser.findOne({ accountId: accountId });
    return !!user;
  }
  async existsByEmail(email: string): Promise<boolean> {
    const user = await MongooseUser.findOne({
      email: email,
    });
    return !!user;
  }

  async existsByNickname(nickname: string): Promise<boolean> {
    const users = await MongooseUser.find().populate("profile");

    const user = users?.find((user) => user?.profile?.nickname === nickname);

    // console.log({ nickname });
    // const user = await MongooseUser.findOne({
    //   where: { profile: { nickname } },
    // }).populate("profile");

    // console.log(user);

    // const profile = await MongooseProfile.findOne({
    //   nickname: nickname,
    // });
    // console.log({ profile });
    // const user = await MongooseUser.findOne({
    //   profile: profile?._id,
    // });
    // console.log(user);
    return !!user;
  }
}
