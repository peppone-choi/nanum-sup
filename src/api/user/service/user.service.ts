import UserRepository from "../repository/user.repository";
import { UserService } from "./user.service.type";

export default class UserServiceImpl implements UserService {
  private readonly _userRepository: UserRepository;
  constructor(userRepository: UserRepository) {
    this._userRepository = userRepository;
  }
  getUsers(): Promise<IUser[]> {
    return this._userRepository.getList();
  }
  getUserDetail(id: string): Promise<IUser> {
    return this._userRepository.getById(id);
  }
  signIn(user: Omit<IUser, "id">): Promise<IUser> {
    return this._userRepository.create(user);
  }
  updateUser(
    id: string,
    updateData: Omit<IUser, "id" | "userId">
  ): Promise<void> {
    return this._userRepository.update(id, updateData);
  }
  deleteUser(id: string): Promise<void> {
    return this._userRepository.delete(id);
  }
}
