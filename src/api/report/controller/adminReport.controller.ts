import { NextFunction, Request, Response } from "express";
import ReportService from "../service/report.service.type";

export default class AdminReportController {
  private readonly _reportService: ReportService;
  constructor(_reportService: ReportService) {
    this._reportService = _reportService;

    this.getAdminReports = this.getAdminReports.bind(this);
    this.getAdminReportDetail = this.getAdminReportDetail.bind(this);
    this.getAdminReportsByUserId = this.getAdminReportsByUserId.bind(this);
    this.createAdminReport = this.createAdminReport.bind(this);
    this.processAdminReport = this.processAdminReport.bind(this);
    this.rejectAdminReport = this.rejectAdminReport.bind(this);
    this.updateAdminReport = this.updateAdminReport.bind(this);
    this.deleteAdminReport = this.deleteAdminReport.bind(this);
  }
  async getAdminReports(req: Request, res: Response, next: NextFunction) {
    try {
      const reports = await this._reportService.getUserReports();
      res.status(200).json(reports);
    } catch (error) {
      next(error);
    }
  }
  async getAdminReportDetail(req: Request, res: Response, next: NextFunction) {
    try {
      const { reportId } = req.params;
      const report = await this._reportService.getUserReportDetail(reportId);
      res.status(200).json(report);
    } catch (error) {
      next(error);
    }
  }
  async getAdminReportsByUserId(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;
      const reports = await this._reportService.getUserReportsByUserId(userId);
      res.status(200).json(reports);
    } catch (error) {
      next(error);
    }
  }
  async createAdminReport(req: Request, res: Response, next: NextFunction) {
    try {
      const { type, from, to, url, reason } = req.body;
      const report = await this._reportService.createUserReport(type, from, to, url, reason);
      res.status(201).json(report);
    } catch (error) {
      next(error);
    }
  }
  async processAdminReport(req: Request, res: Response, next: NextFunction) {
    try {
      const { reportId } = req.params;
      await this._reportService.approveUserReport(reportId);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
  async rejectAdminReport(req: Request, res: Response, next: NextFunction) {
    try {
      const { reportId } = req.params;
      await this._reportService.rejectUserReport(reportId);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
  async updateAdminReport(req: Request, res: Response, next: NextFunction) {
    try {
      const { reportId } = req.params;
      const updateReport = req.body;
      await this._reportService.updateUserReport(reportId, updateReport);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
  async deleteAdminReport(req: Request, res: Response, next: NextFunction) {
    try {
      const { reportId } = req.params;
      await this._reportService.deleteUserReport(reportId);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
}
