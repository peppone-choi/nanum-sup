import mongoosePrev from "mongoose";

const mongoose = Object.assign(mongoosePrev, {
  generateCustomId(prefix: string) {
    const uniqueId = new mongoose.Types.ObjectId().toString(); // 고유한 ObjectId를 문자열로 변환
    return `${prefix}_${uniqueId}`;
  },
});

export default mongoose;
