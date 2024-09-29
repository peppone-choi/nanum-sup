import { ReportListResponseDto } from "../dto/reportListResponse.dto";
import { ReportResponseDto } from "../dto/reportResponse.dto";

export default interface ReportService {
  createUserReport(type: "post" | "comment", from: string, to: string, url: string, reason: string): Promise<ReportResponseDto>;
  getUserReports(): Promise<ReportListResponseDto>;
  getUserReportsByUserId(userId: string): Promise<ReportListResponseDto>;
  getUserReportDetail(reportId: string): Promise<ReportResponseDto>;
  updateUserReport(reportId: string, updateReport: Omit<IReport, "id" | "reporter" | "reported">): Promise<void>;
  deleteUserReport(reportId: string): Promise<void>;
  approveUserReport(reportId: string): Promise<void>;
  rejectUserReport(reportId: string): Promise<void>;
}
