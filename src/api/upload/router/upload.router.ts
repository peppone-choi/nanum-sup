import express from "express";
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/routers";
import { imageUpload, videoUpload } from "@/vendors/multer";

const uploadRouter = express.Router();

const UPLOAD_ROUTES = {
  UPLOAD_IMAGE: "api/upload/image",
  UPLOAD_IMAGES: "/api/upload/images",
  UPLOAD_VIDEO: "/api/upload/video",
};

uploadRouter.post(extractPath(UPLOAD_ROUTES.UPLOAD_IMAGE, ROUTES_INDEX.UPLOAD_API), imageUpload.single("filename"), (req, res, next) => {
  const SERVER_URL = process.env.SERVER_URL || "http://localhost:4000";
  const file = req.file as Express.Multer.File;

  const imageUrl = `${SERVER_URL}/static/uploads/${file?.filename}`;

  res.status(201).json({ url: imageUrl });
});

uploadRouter.post(extractPath(UPLOAD_ROUTES.UPLOAD_IMAGES, ROUTES_INDEX.UPLOAD_API), imageUpload.array("filenames", 4), (req, res, next) => {
  const SERVER_URL = process.env.SERVER_URL || "http://localhost:4000";
  const files = req.files as Express.Multer.File[];
  res.status(201).json({
    urls: files.map((file) => `${SERVER_URL}/static/uploads/${file?.filename}`),
  });
});

uploadRouter.post(extractPath(UPLOAD_ROUTES.UPLOAD_VIDEO, ROUTES_INDEX.UPLOAD_API), videoUpload.single("filename"), (req, res, next) => {
  const SERVER_URL = process.env.SERVER_URL || "http://localhost:4000";
  const file = req.file as Express.Multer.File;

  const videoUrl = `${SERVER_URL}/static/uploads/${file?.filename}`;

  res.status(201).json({ url: videoUrl });
});

export default uploadRouter;
