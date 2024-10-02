export default interface FollowRepository {
  getFollows(): Promise<IFollow[]>;
  getFollowingByUserId(userId: string): Promise<IFollow[]>;
  getFollowerByUserId(userId: string): Promise<IFollow[]>;
  createFollow(follow: Omit<IFollow, "id">): Promise<IFollow>;
  deleteFollow(followId: string): Promise<void>;
}
