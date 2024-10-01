import { NextFunction, Request, Response } from "express";
import LikeService from "../service/like.service.type";

export default class AdminLikeController {
  private readonly _likeService: LikeService;
  constructor(_LikeService: LikeService) {
    this._likeService = _LikeService;
  }
}
