import { NextFunction, Request, Response } from "express";

export const healthCheck = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("서버 건강하다잉");
};
