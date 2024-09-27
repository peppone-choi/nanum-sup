import HttpException from "@/api/common/exceptions/http.exception";
import multer from "multer";
import path from "node:path";
import { v4 as uuid } from "uuid";
const dest = path.join(__dirname, "../../public/uploads");

export const storage = multer.diskStorage({
  destination(req, file, cb) {
    return cb(null, dest);
  },
  filename(req, file, cb) {
    const ext = file.mimetype.split("/")[1];
    const fileNameRegex = /(.+)(\..+)/gm;

    const filename = `${file.originalname.replace(fileNameRegex, "$1")}-${uuid()}.${ext}`;
    return cb(null, filename);
  },
});

/** 이미지 업로드 */
export const imageUpload = multer({
  storage,
  fileFilter(req, file, cb) {
    if (!file.mimetype.startsWith("image")) {
      return cb(new HttpException(400, "이미지 파일만 업로드 할 수 있습니다."));
    }

    return cb(null, true);
  },
  limits: {
    fileSize: 1024 * 1024 * 50, // 5MB
  },
});

/** 비디오만 업로드 가능하게 하는 멀터 */
export const videoUpload = multer({
  storage,
  fileFilter(req, file, cb) {
    if (!file.mimetype.startsWith("video")) {
      return cb(new HttpException(400, "비디오 파일만 업로드할 수 있습니다."));
    }

    return cb(null, true);
  },
  limits: {
    fileSize: 1024 * 1024 * 50, // 50MB
  },
});
