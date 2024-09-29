import { ReportResponseDto } from "./reportResponse.dto";

export class ReportListResponseDto {
  numberOfReports: number;
  reports: ReportResponseDto[];
  constructor(reports: IReport[]) {
    this.numberOfReports = reports.length;
    this.reports = reports.map((report) => new ReportResponseDto(report));
  }
}
