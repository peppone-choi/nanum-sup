import { NextFunction, Request, Response } from "express";
import LikeService from "./like.service.type";
import { LikeRepository } from "../repository/like.repository";
import LikeResponseDto from "../dto/likeResponse.dto";
import { UserRepository } from "@/api/user/repository/user.repository";

export default class LikeServiceImpl implements LikeService {
  private readonly _likeRepository: LikeRepository;
  private readonly _userRepository: UserRepository;
  constructor(_likeRepository: LikeRepository, _userRepository: UserRepository) {
    this._likeRepository = _likeRepository;
    this._userRepository = _userRepository;
    this.createLike = this.createLike.bind(this);
    this.deleteLike = this.deleteLike.bind(this);
  }

  async createLike(userId: string): Promise<LikeResponseDto> {
    const user = await this._userRepository.getById(userId);
    const like = await this._likeRepository.createLike(user);
    return new LikeResponseDto(like);
  }
  async deleteLike(likeId: string): Promise<void> {
    return await this._likeRepository.deleteLike(likeId);
  }
  async likedByUser(userId: string, likeId: string): Promise<boolean> {
    const user = await this._userRepository.getById(userId);
    return await this._likeRepository.likedByUser(user, likeId);
  }
}
