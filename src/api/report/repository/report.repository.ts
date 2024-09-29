export default interface ReportRepository {
  create(report: Omit<IReport, "id" | "status" | "createdAt">): Promise<IReport>;
  getList(): Promise<IReport[]>;
  getListByUserId(userId: string): Promise<IReport[]>;
  getById(reportId: string): Promise<IReport>;
  update(reportId: string, updateReport: Omit<IReport, "id" | "reporter" | "reported">): Promise<void>;
  delete(reportId: string): Promise<void>;
  process(reportId: string, processType: "approved" | "rejected"): Promise<void>;
}
