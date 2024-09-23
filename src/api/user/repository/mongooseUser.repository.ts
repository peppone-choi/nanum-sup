import HttpException from "@/api/common/exceptions/http.exception";
import { MongooseUser } from "../model/user.schema";
import { UserRepository } from "./user.repository";


export default class MongooseUserRepository implements UserRepository {
  async create(user: Omit<IUser, "id">): Promise<IUser> {
    const newUser = new MongooseUser(user);
    await newUser.save();
    return newUser;
  }
  async getList(): Promise<IUser[]> {
    const values = await MongooseUser.find();
    return values;
  }
  async getById(id: string): Promise<IUser> {
    const user = await MongooseUser.findById(id);
    if (!user) {
      throw new HttpException(404, "유저가 존재하지 않습니다.");
    }
    return user;
  }
  async update(
    id: string,
    updateData: Omit<IUser, "id" | "userId">
  ): Promise<void> {
    const updatedUser = await MongooseUser.findByIdAndUpdate(id, updateData);
    if (!updatedUser) {
      throw new HttpException(404, "유저가 존재하지 않습니다.");
    }
    return;
  }
  async delete(id: string): Promise<void> {
    const user = await MongooseUser.findById(id);
    if (!user) {
      throw new HttpException(404, "유저가 존재하지 않습니다.");
    }
    await MongooseUser.deleteOne({ _id: id });
    return;
  }
  async findByAccountId(accountId: string): Promise<IUser> {
    const user = await MongooseUser.findOne({ accountId: accountId });
    if (!user) {
      throw new HttpException(404, "유저가 존재하지 않습니다.");
    }
    return user;
  }
}
