import { NextFunction, Request, Response } from "express";
import ReportService from "../service/report.service.type";

export default class ReportController {
  private readonly _reportService: ReportService;
  constructor(_reportService: ReportService) {
    this._reportService = _reportService;
    this.createUserReport = this.createUserReport.bind(this);
  }
  async createUserReport(req: Request, res: Response, next: NextFunction) {
    try {
      const { type, from, to, url, reason } = req.body;
      const report = await this._reportService.createUserReport(type, from, to, url, reason);
      res.status(201).json(report);
    } catch (error) {
      next(error);
    }
  }
}
