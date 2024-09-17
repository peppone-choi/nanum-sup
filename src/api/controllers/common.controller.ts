import { NextFunction, Request, Response } from "express";

export const healthCheck = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("Server is up and running");
};
