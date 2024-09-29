import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";
import AdminReportController from "../controller/adminReport.controller";
import ReportServiceImpl from "../service/report.service";
import { MongooseCommentRepository } from "@/api/comment/repository/mongooseComment.repository";
import { MongoosePostRepository } from "@/api/posts/repository/mongoosePost.repository";
import MongooseUserRepository from "@/api/user/repository/mongooseUser.repository";
import { MongooseReportRepository } from "../repository/mongooseReport.repository";

const adminReportRouter = express.Router();

/* 관리자 신고 관련 API 경로 객체 */
const ADMIN_REPORT_ROUTES = {
  /** [관리자] 신고 전체 리스트 조회 */
  GET_REPORTS: `/admin-api/reports`,
  /** [관리자] 요저별 신고 조회 */
  GET_USER_REPORTS: `/admin-api/reports/user/:userId`,
  /** [관리자] 신고 상세 정보 조회 */
  GET_REPORT_DETAIL: `/admin-api/reports/:reportId`,
  /** [관리자] 신고 추가 */
  CREATE_REPORT: `/admin-api/reports`,
  /** [관리자] 신고 처리 (정상 처리) */
  PROCESS_REPORT: `/admin-api/reports/:reportId/process`,
  /** [관리자] 신고 처리 (부적절 처리) */
  REJECT_REPORT: `/admin-api/reports/:reportId/reject`,
  /** [관리자] 신고 정보 수정 */
  UPDATE_REPORT: `/admin-api/reports/:reportId`,
  /** [관리자] 신고 삭제 */
  DELETE_REPORT: `/admin-api/reports/:reportId`,
} as const;

const adminReportController = new AdminReportController(
  new ReportServiceImpl(new MongooseReportRepository(), new MongooseUserRepository(), new MongoosePostRepository(), new MongooseCommentRepository())
);

adminReportRouter.get(extractPath(ADMIN_REPORT_ROUTES.GET_REPORTS, ROUTES_INDEX.ADMIN_REPORT_API), adminReportController.getAdminReports);

adminReportRouter.get(extractPath(ADMIN_REPORT_ROUTES.GET_USER_REPORTS, ROUTES_INDEX.ADMIN_REPORT_API), adminReportController.getAdminReportsByUserId);

adminReportRouter.get(extractPath(ADMIN_REPORT_ROUTES.GET_REPORT_DETAIL, ROUTES_INDEX.ADMIN_REPORT_API), adminReportController.getAdminReportDetail);

adminReportRouter.post(extractPath(ADMIN_REPORT_ROUTES.CREATE_REPORT, ROUTES_INDEX.ADMIN_REPORT_API), adminReportController.createAdminReport);

adminReportRouter.put(extractPath(ADMIN_REPORT_ROUTES.PROCESS_REPORT, ROUTES_INDEX.ADMIN_REPORT_API), adminReportController.processAdminReport);

adminReportRouter.put(extractPath(ADMIN_REPORT_ROUTES.REJECT_REPORT, ROUTES_INDEX.ADMIN_REPORT_API), adminReportController.rejectAdminReport);

adminReportRouter.put(extractPath(ADMIN_REPORT_ROUTES.UPDATE_REPORT, ROUTES_INDEX.ADMIN_REPORT_API), adminReportController.updateAdminReport);

adminReportRouter.delete(extractPath(ADMIN_REPORT_ROUTES.DELETE_REPORT, ROUTES_INDEX.ADMIN_REPORT_API), adminReportController.deleteAdminReport);

export default adminReportRouter;
