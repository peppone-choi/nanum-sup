export class Report implements IReport {
  id: string;
  reporter: IUser;
  reported: IUser;
  reason: string;
  reportedPost: IPost | null;
  reportedComment: IComment | null;
  status: "approved" | "rejected" | "pending";
  createdAt: Date;

  constructor(report: IReport) {
    this.id = report.id;
    this.reporter = report.reporter;
    this.reported = report.reported;
    this.reason = report.reason;
    this.reportedPost = report.reportedPost ?? null;
    this.reportedComment = report.reportedComment ?? null;
    this.status = report.status;
    this.createdAt = report.createdAt;
  }
}
