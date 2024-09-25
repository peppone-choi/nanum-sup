import { NextFunction, Request, Response } from "express";
import LikeService from "./like.service.type";
import { LikeRepository } from "../repository/like.repository";
import LikeResponseDto from "../dto/likeResponse.dto";

export default class LikeServiceImpl implements LikeService {
  private readonly _likeRepository: LikeRepository;
  constructor(_likeRepository: LikeRepository) {
    this._likeRepository = _likeRepository;
    this.getLikes = this.getLikes.bind(this);
    this.getLikesPost = this.getLikesPost.bind(this);
    this.getLikesComment = this.getLikesComment.bind(this);
    this.createLike = this.createLike.bind(this);
    this.deleteLike = this.deleteLike.bind(this);
    this.countLikesPost = this.countLikesPost.bind(this);
    this.countLikesComment = this.countLikesComment.bind(this);
  }
  async getLikes(): Promise<LikeResponseDto[]> {
    const likes = await this._likeRepository.getLikes();
    return likes.map((like) => {
      return new LikeResponseDto(like);
    });
  }
  async getLikesPost(postId: string): Promise<LikeResponseDto[]> {
    const likes = await this._likeRepository.getLikesPost(postId);
    return likes.map((like) => {
      return new LikeResponseDto(like);
    });
  }
  async getLikesComment(commentId: string): Promise<LikeResponseDto[]> {
    const likes = await this._likeRepository.getLikesComment(commentId);
    return likes.map((like) => {
      return new LikeResponseDto(like);
    });
  }
  async createLike(
    type: "post" | "comment",
    user: IUser,
    post?: IPost,
    comment?: IComment
  ): Promise<LikeResponseDto> {
    const like = await this._likeRepository.createLike(
      type,
      user,
      post,
      comment
    );
    return new LikeResponseDto(like);
  }
  async deleteLike(likeId: string): Promise<void> {
    return await this._likeRepository.deleteLike(likeId);
  }
  async countLikesPost(postId: string): Promise<number> {
    return await this._likeRepository.countLikesPost(postId);
  }
  async countLikesComment(commentId: string): Promise<number> {
    return await this._likeRepository.countLikesComment(commentId);
  }
}
