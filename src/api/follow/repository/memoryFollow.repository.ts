import FollowRepository from "./follow.repository";

export default class MemoryFollowRepository implements FollowRepository {
  static index = 0;
  static readonly map: Map<string, IFollow> = new Map();

  async getFollows(): Promise<IFollow[]> {
    const values = Array.from(MemoryFollowRepository.map.values());
    return values;
  }
  async getFollowingByUserId(userId: string): Promise<IFollow[]> {
    const values = Array.from(MemoryFollowRepository.map.values()).filter((follow) => follow.from.id === userId);
    return values;
  }
  async getFollowerByUserId(userId: string): Promise<IFollow[]> {
    const values = Array.from(MemoryFollowRepository.map.values()).filter((follow) => follow.to.id === userId);
    return values;
  }
  async createFollow(follow: Omit<IFollow, "id">): Promise<IFollow> {
    const newFollow = {
      ...follow,
      id: `follow-${MemoryFollowRepository.index++}`,
    };
    MemoryFollowRepository.map.set(newFollow.id, newFollow);
    return newFollow;
  }
  async deleteFollow(followId: string): Promise<void> {
    MemoryFollowRepository.map.delete(followId);
    return;
  }
}
