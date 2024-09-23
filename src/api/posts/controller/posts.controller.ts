import { NextFunction, Request, Response } from "express";
import { PostsService } from "@/api/posts/service/posts.service.type";

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

    this.getPosts = this.getPosts.bind(this);
    this.getPostDetail = this.getPostDetail.bind(this);
    this.createPost = this.createPost.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  async getPosts(
    req: Request<
    getPostsRequest["path"], 
    getPostsResponse, 
    getPostsRequest["body"], 
    getPostsRequest["params"]
    >, 
    res: Response, 
    next: NextFunction
  ) {
    try {
      const posts = await this._postsService.getPosts();

      res.send(posts);
    } catch (error) {
      next(error);
    }
  }
  async getPostDetail(
    req: Request<
    getPostDetailRequest["path"], 
    getPostDetailResponse, 
    getPostDetailRequest["body"], 
    getPostDetailRequest["params"]
    >, 
    res: Response, 
    next: NextFunction
  ) {
    const { postId } = req.params;
    try {
      const post = await this._postsService.getPostDetail(postId);
      res.send(post);
    } catch (error) {
      next(error);
    }
  }
  async createPost(
    req: Request<
    createPostRequest["path"], 
    createPostResponse, 
    createPostRequest["body"], 
    createPostRequest["params"]
    >, 
    res: Response, 
    next: NextFunction
  ) {
    const { title, content, categoryId } = req.body;

    try {
      const createdPost = await this._postsService.createPost(categoryId, { 
        title,
        content,
      });
      res.send(createdPost);
    } catch (error) {
      next(error);
     }
  }
  async updatePost(req: Request<updatePostRequest["path"], updatePostResponse, updatePostRequest["body"], updatePostRequest["params"]>, res: Response, next: NextFunction) {
    const { postId } = req.params;

    try {
      await this._postsService.updatePost(postId, req.body);

      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }

  async deletePost(req: Request<deletePostRequest["path"], deletePostResponse, deletePostRequest["body"], deletePostRequest["params"]>, res: Response, next: NextFunction) {
    const { postId } = req.params;
    try {
      await this._postsService.deletePost(postId);
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }
}
