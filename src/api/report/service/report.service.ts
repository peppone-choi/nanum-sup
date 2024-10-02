import { th } from "@faker-js/faker/.";
import ReportRepository from "../repository/report.repository";
import ReportService from "./report.service.type";
import { CommentRepository } from "@/api/comment/repository/comment.repository";
import { PostRepository } from "@/api/posts/repository/post.repository";
import { UserRepository } from "@/api/user/repository/user.repository";
import HttpException from "@/api/common/exceptions/http.exception";
import { ReportResponseDto } from "../dto/reportResponse.dto";
import { ReportListResponseDto } from "../dto/reportListResponse.dto";

export default class ReportServiceImpl implements ReportService {
  private readonly _reportRepository: ReportRepository;
  private readonly _userRepository: UserRepository;
  private readonly _postRepository: PostRepository;
  private readonly _commentRepository: CommentRepository;
  constructor(_reportRepository: ReportRepository, _userRepository: UserRepository, _postRepository: PostRepository, _commentRepository: CommentRepository) {
    this._reportRepository = _reportRepository;
    this._userRepository = _userRepository;
    this._postRepository = _postRepository;
    this._commentRepository = _commentRepository;
    this.createUserReport = this.createUserReport.bind(this);
    this.getUserReports = this.getUserReports.bind(this);
    this.getUserReportsByUserId = this.getUserReportsByUserId.bind(this);
    this.getUserReportDetail = this.getUserReportDetail.bind(this);
    this.updateUserReport = this.updateUserReport.bind(this);
    this.deleteUserReport = this.deleteUserReport.bind(this);
    this.approveUserReport = this.approveUserReport.bind(this);
    this.rejectUserReport = this.rejectUserReport.bind(this);
  }

  async createUserReport(type: "post" | "comment", from: string, to: string, id: string, reason: string): Promise<ReportResponseDto> {
    const reporter = await this._userRepository.getById(from);
    const reported = await this._userRepository.getById(to);
    const report = await this._reportRepository.create({
      reporter: reporter,
      reported: reported,
      reportedPost: type === "post" ? await this._postRepository.findById(id) : null,
      reportedComment: type === "comment" ? await this._commentRepository.findById(id) : null,
      reason,
    });
    return new ReportResponseDto(report);
  }

  async getUserReports(): Promise<ReportListResponseDto> {
    const reports = await this._reportRepository.getList();
    return new ReportListResponseDto(reports);
  }
  async getUserReportsByUserId(userId: string): Promise<ReportListResponseDto> {
    const reports = await this._reportRepository.getListByUserId(userId);
    return new ReportListResponseDto(reports);
  }
  async getUserReportDetail(reportId: string): Promise<ReportResponseDto> {
    const report = await this._reportRepository.getById(reportId);
    return new ReportResponseDto(report);
  }
  async updateUserReport(reportId: string, updateReport: Omit<IReport, "id" | "reporter" | "reported">): Promise<void> {
    await this._reportRepository.update(reportId, updateReport);
  }
  async deleteUserReport(reportId: string): Promise<void> {
    await this._reportRepository.delete(reportId);
  }
  async approveUserReport(reportId: string): Promise<void> {
    await this._reportRepository.process(reportId, "approved");
  }
  async rejectUserReport(reportId: string): Promise<void> {
    await this._reportRepository.process(reportId, "rejected");
  }
}
