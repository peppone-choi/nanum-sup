import ReportRepository from "./report.repository";

export class MemoryReportRepository implements ReportRepository {
  private static index = 0;
  private static map: Map<string, IReport> = new Map();
  async create(report: Omit<IReport, "id" | "status" | "createdAt">): Promise<IReport> {
    const id = (MemoryReportRepository.index++).toString();
    const newReport: IReport = { ...report, id, status: "pending", createdAt: new Date() };
    MemoryReportRepository.map.set(id, newReport);
    return MemoryReportRepository.map.get(id)!;
  }
  async getList(): Promise<IReport[]> {
    return Array.from(MemoryReportRepository.map.values());
  }
  async getListByUserId(userId: string): Promise<IReport[]> {
    return Array.from(MemoryReportRepository.map.values()).filter((report) => report.reported.id === userId);
  }
  async getById(reportId: string): Promise<IReport> {
    const report = MemoryReportRepository.map.get(reportId);
    if (!report) {
      throw new Error("Report not found");
    }
    return report;
  }
  async update(reportId: string, updateReport: Omit<IReport, "id" | "reporter" | "reported">): Promise<void> {
    const report = MemoryReportRepository.map.get(reportId);
    if (!report) {
      throw new Error("Report not found");
    }
    MemoryReportRepository.map.set(reportId, { ...report, ...updateReport });
  }
  async delete(reportId: string): Promise<void> {
    MemoryReportRepository.map.delete(reportId);
  }
  async process(reportId: string, processType: "approved" | "rejected"): Promise<void> {
    const report = MemoryReportRepository.map.get(reportId);
    if (!report) {
      throw new Error("Report not found");
    }
    MemoryReportRepository.map.set(reportId, { ...report, status: processType });
  }
}
