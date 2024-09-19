import { NextFunction, Request, Response } from "express";
import { PostsService } from "../service/posts.service.type";

// [사용자]
// 글 목록 조회 - getPosts
// 글 상세 조회 - getPostDetail
// 글 생성 - createPost
// 글 수정 - updatePost
// 글 삭제 - deletePost

export default class PostsController {
  private readonly _postsService: PostsService;
  constructor(_postsService: PostsService) {
    this._postsService = _postsService;
  }

  async getPosts (req: Request, res: Response, next: NextFunction) {
    try {
      const posts = await this._postsService.getPosts();
      res.send("글목록조회")
    } catch (error) {
      next(error);
    }
  }
  async getPostDetail (req: Request, res: Response, next: NextFunction) {
    try {
      const postDetail = await this._postsService.getPostDetail();
      res.send("글상세조회")
    } catch (error) {
      next(error);
    }
  }
  async createPost (req: Request, res: Response, next: NextFunction) {
    try {
      const createdPost  = await this._postsService.createPost();
      res.send("글작성")
    } catch (error) {
      next(error);
    }
  }
  async updatePost (req: Request, res: Response, next: NextFunction) {
    try {
      await this._postsService.updatePost();
      res.send("글수정")
    } catch (error) {
      next(error);
    }
  }
  async deletePost (req: Request, res: Response, next: NextFunction) {
    try {
      await this._postsService.deletePost();
      res.send("글삭제")
    } catch (error) {
      next(error);
    }
  }
}


