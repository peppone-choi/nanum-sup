import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";
import ReportController from "../controller/report.controller";
import ReportServiceImpl from "../service/report.service";
import { MongooseReportRepository } from "../repository/mongooseReport.repository";
import MongooseUserRepository from "@/api/user/repository/mongooseUser.repository";
import { MongoosePostRepository } from "@/api/posts/repository/mongoosePost.repository";
import { MongooseCommentRepository } from "@/api/comment/repository/mongooseComment.repository";

const reportRouter = express.Router();

/* 신고 관련 API 경로 객체 */
const USER_REPORT_ROUTES = {
  /** 유저 신고 추가 */
  CREATE_REPORT: `/api/reports`,
} as const;

const reportController = new ReportController(new ReportServiceImpl(new MongooseReportRepository(), new MongooseUserRepository(), new MongoosePostRepository(), new MongooseCommentRepository()));

reportRouter.post(extractPath(USER_REPORT_ROUTES.CREATE_REPORT, ROUTES_INDEX.REPORT_API), reportController.createUserReport);

export default reportRouter;
