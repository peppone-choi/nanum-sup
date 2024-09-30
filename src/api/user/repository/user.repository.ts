export interface UserRepository {
  /** CREATE USER */
  create(user: Omit<IUser, "id">): Promise<IUser>;
  /** READ USERS */
  getList(): Promise<IUser[]>;
  /** READ USER */
  getById(id: string): Promise<IUser>;
  /** UPDATE USER */
  update(id: string, updateData: Omit<IUser, "id" | "userId">): Promise<void>;
  /** DELETE USER */
  delete(id: string): Promise<void>;
  findByAccountId(accountId: string): Promise<IUser>;
  getByNickname(nickname: string): Promise<IUser>;
  existsByAccountId(accountId: string): Promise<boolean>;
  existsByEmail(email: string): Promise<boolean>;
  existsByNickname(nickname: string): Promise<boolean>;
}

// export default UserRepository;
