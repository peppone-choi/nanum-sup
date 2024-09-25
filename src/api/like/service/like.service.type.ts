import { NextFunction, Request, Response } from "express";

export default interface LikeService {
  getLikesPost: (req: Request, res: Response, next: NextFunction) => void;
  getLikesComment: (req: Request, res: Response, next: NextFunction) => void;
  createLike: (req: Request, res: Response, next: NextFunction) => void;
  deleteLike: (req: Request, res: Response, next: NextFunction) => void;
}
