import { healthCheck } from "@/api/controllers/common.controller";
import express from "express";

const adminAppRouter = express.Router();

const BASE_PATH = "/admin-api";

// 모듈화 사용전
// adminAppRouter.get(`${BASE_PATH}`, (req, res) => {
//   res.send("서버 건강하다잉");
// });
// 모듈화 사용 후
adminAppRouter.get(`${BASE_PATH}`, healthCheck);

export default adminAppRouter;
