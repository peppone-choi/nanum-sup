import HttpException from "@/api/common/exceptions/http.exception";
import { MongooseReport } from "../model/report.schema";
import ReportRepository from "./report.repository";
import path from "path";

export class MongooseReportRepository implements ReportRepository {
  async create(report: Omit<IReport, "id" | "status" | "createdAt">): Promise<IReport> {
    const newReport = new MongooseReport({
      ...report,
      status: "pending",
      createdAt: new Date(),
    });
    await newReport.save();
    return newReport;
  }
  async getList(): Promise<IReport[]> {
    const reports = await MongooseReport.find();
    return reports;
  }
  async getListByUserId(userId: string): Promise<IReport[]> {
    const reports = await MongooseReport.find({ "reported.id": userId })
      .populate({
        path: "reporter",
        populate: {
          path: "profile",
        },
      })
      .populate({ path: "reported", populate: { path: "profile" } });
    return reports;
  }
  async getById(reportId: string): Promise<IReport> {
    const report = await MongooseReport.findById(reportId)
      .populate({
        path: "reporter",
        populate: {
          path: "profile",
        },
      })
      .populate({ path: "reported", populate: { path: "profile" } });
    if (!report) {
      throw new HttpException(404, "신고 내역을 찾을 수 없습니다.");
    }
    return report;
  }
  async update(reportId: string, updateReport: Omit<IReport, "id" | "reporter" | "reported">): Promise<void> {
    await MongooseReport.findByIdAndUpdate(reportId, updateReport);
    return;
  }
  async delete(reportId: string): Promise<void> {
    await MongooseReport.findByIdAndDelete(reportId);
    return;
  }
  async process(reportId: string, processType: "approved" | "rejected"): Promise<void> {
    await MongooseReport.findByIdAndUpdate(reportId, { status: processType });
  }
}
