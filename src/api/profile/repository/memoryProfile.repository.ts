import HttpException from "@/api/common/exceptions/http.exception";
import { Profile } from "@/api/profile/model/profile.model";
import { ProfileRepository } from "@/api/profile/repository/profile.repository";

export class MemoryProfileRepository implements ProfileRepository {
  static index = 0;
  static readonly store: Map<string, IProfile> = new Map();

  async save(): Promise<IProfile> {
    const newProfile = new Profile({
      ...profile,
      id: `profile-${MemoryProfileRepository.index++}`,
    });

    MemoryProfileRepository.store.set(newProfile.id, newProfile);

    return newProfile;
  }
  async findById(id: string): Promise<IProfile | null> {
    const findProfile = MemoryProfileRepository.store.get(id);

    return findProfile ?? null;
  }
  async update(
    profileId: string,
    updateProfileInfo: Partial<IProfile>
  ): Promise<IProfile> {
    const findProfile = MemoryProfileRepository.store.get(profileId);

    if (!findProfile) {
      throw new HttpException(404, "프로필을 찾을 수 없습니다.");
    }

    MemoryProfileRepository.store.set(profileId, {
      ...findProfile,
      ...updateProfileInfo,
    });

    return MemoryProfileRepository.store.get(profileId)!;
  }
}
