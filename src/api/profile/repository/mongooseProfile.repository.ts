import HttpException from "@/api/common/exceptions/http.exception";
import { ProfileRepository } from "@/api/profile/repository/profile.repository";
import { MongooseProfile } from "@/api/profile/model/profile.schma";

export class MongooseProfileRepository implements ProfileRepository {
  async save(profile: Omit<IProfile, "id">): Promise<IProfile> {
    const newProfile = new MongooseProfile(profile);

    await newProfile.save();

    return newProfile;
  }
  async findById(id: string): Promise<IProfile | null> {
    const profile = await MongooseProfile.findById(id);
    return profile;
  }
  async update(
    profileId: string,
    updateProfileInfo: Partial<IProfile>
  ): Promise<IProfile> {
    const results = await MongooseProfile.findByIdAndUpdate(
      profileId,
      updateProfileInfo
    );

    if (!results) {
      throw new HttpException(404, "프로필을 찾을 수 없습니다.");
    }

    return results;
  }
}
