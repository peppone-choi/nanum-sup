import { NextFunction, Request, Response } from "express";
import { PostsService } from "@/api/posts/service/posts.service.type";
import { faker } from "@faker-js/faker";

// [관리자]
// 글 목록 조회 - getPosts
// 글 상세 조회 - getPostDetail
// 글 생성 - createPost
// 글 수정 - updatePost
// 글 삭제 - deletePost

export default class AdminPostsController {
  private readonly _postsService: PostsService;
  constructor(_postsService: PostsService) {
    this._postsService = _postsService;

    this.getPosts = this.getPosts.bind(this);
    this.getPostDetail = this.getPostDetail.bind(this);
    this.createPost = this.createPost.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.createDummy = this.createDummy.bind(this);
  }

  
  /** 더미 데이터 */
  async createDummy(req: Request, res: Response, next: NextFunction) {
    try {
      const list = new Array(parseInt(req.query.count?.toString() ?? "100"))
        .fill(0)
        .map((_) => {
          return {
            title: faker.lorem.words({ min: 3, max: 5 }),
            content: faker.lorem.sentence({ min: 5, max: 10 }),
          };
        });

      for (const post of list) {
        await this._postsService.createPost(
          "66f21f237f04e1cf576046fc",   // userId
          "66f247f68d1dffeca42e1a10",   // categoryId
        {
          ...post,
        });
      }

      res.status(201).json();
    } catch (error) {
      next(error);
    }
  }




  /** [관리자] 글 목록 조회 */
  async getPosts(
    req: Request<
      adminGetPostsRequest["path"],
      adminGetPostsResponse,
      adminGetPostsRequest["body"],
      adminGetPostsRequest["params"]
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

  /** [관리자] 글 상세 조회 */
  async getPostDetail(
    req: Request<
      adminGetPostDetailRequest["path"],
      adminGetPostDetailResponse,
      adminGetPostDetailRequest["body"],
      adminGetPostDetailRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    try {
      const postDetail = await this._postsService.getPostDetail(
        req.params.postId
      );

      res.send(postDetail);
    } catch (error) {
      next(error);
    }
  }

  /** [관리자] 글 생성 */
  async createPost(
    req: Request<
      adminCreatePostRequest["path"],
      adminCreatePostResponse,
      adminCreatePostRequest["body"],
      adminCreatePostRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { userId, categoryId, title, content } = req.body;

    try {
      const createdPost = await this._postsService.createPost(
        userId,
        categoryId,
        {
          title,
          content,
        }
      );
      res.status(201).send(createdPost);
    } catch (error) {
      next(error);
    }
  }

  /** [관리자] 글 수정 */
  async updatePost(
    req: Request<
      adminUpdatePostRequest["path"],
      adminUpdatePostResponse,
      adminUpdatePostRequest["body"],
      adminUpdatePostRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { postId } = req.params;

    try {
      const { title, content, category } = req.body;
      await this._postsService.updatePost(postId, { title, content, category });
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }

  /** [관리자] 글 삭제 */
  async deletePost(
    req: Request<
      adminDeletePostRequest["path"],
      adminDeletePostResponse,
      adminDeletePostRequest["body"],
      adminDeletePostRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { postId } = req.params;
    try {
      await this._postsService.deletePost(postId);
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }
}
