import HttpException from "@/api/common/exceptions/http.exception";
import { User } from "../model/user.model";
import { UserRepository } from "./user.repository";


export class MemoryUserRepository implements UserRepository {
  static index = 0;
  static readonly store: Map<string, IUser> = new Map();
  async create(user: Omit<IUser, "id">): Promise<IUser> {
    const newUser = new User({
      ...user,
      id: `user-${MemoryUserRepository.index++}`,
    });

    MemoryUserRepository.store.set(newUser.id, newUser);
    return newUser;
  }
  async getList(): Promise<IUser[]> {
    const users = Array.from(MemoryUserRepository.store.values());
    return Promise.resolve(users);
  }
  async getById(id: string): Promise<IUser> {
    const user = MemoryUserRepository.store.get(id);
    if (!user) {
      throw new HttpException(404, "유저가 존재하지 않습니다.");
    }
    return Promise.resolve(user);
  }
  async update(
    id: string,
    updateData: Omit<IUser, "id" | "userId">
  ): Promise<void> {
    const user = MemoryUserRepository.store.get(id);
    if (!user) {
      throw new HttpException(404, "유저가 존재하지 않습니다.");
    }
    MemoryUserRepository.store.set(id, { ...user, ...updateData });
    return;
  }
  async delete(id: string): Promise<void> {
    const user = MemoryUserRepository.store.get(id);
    if (!user) {
      throw new HttpException(404, "유저가 존재하지 않습니다.");
    }
    MemoryUserRepository.store.delete(id);
    return;
  }
  async findByEmail(email: string): Promise<IUser> {
    const user = Array.from(MemoryUserRepository.store.values()).find(
      (user) => user.email === email
    );
    if (!user) {
      throw new HttpException(404, "유저가 존재하지 않습니다.");
    }
    return Promise.resolve(user);
  }
}
