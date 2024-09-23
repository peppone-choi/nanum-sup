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
  findByEmail(email: string): Promise<IUser>;
}

// export default UserRepository;
