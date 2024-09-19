import { NextFunction, Request, Response } from "express";
import { PostsService } from "../service/posts.service.type";

// [관리자]
// 글 목록 조회 - getPosts
// 글 상세 조회 - getPostDetail
// 글 생성 - createPost
// 글 수정 - updatePost
// 글 삭제 - deletePost

// export default class AdminPostsController {
//   constructor() {} 
//    /** [관리자] 글 목록 조회 */
//    async getPosts (
//    req: Request<
//      adminGetPostsRequest["path"],
//      adminGetPostsResponse,
//      adminGetPostsRequest["body"],
//      adminGetPostsRequest["params"]
//    >,
//    res: Response,
//    next: NextFunction
//    ) {
//    res.send("[관리자] 글 목록 조회");
//  };

//    /** [관리자] 글 상세 조회 */
//  async getPostDetail (
//    req: Request<
//    adminGetPostDetailRequest["path"],
//    adminGetPostDetailResponse,
//    adminGetPostDetailRequest["body"],
//    adminGetPostDetailRequest["params"]
//  >,
//  res: Response,
//  next: NextFunction
//  ) {
//    const { PostId } = req.params;
//    res.send("[관리자] 글 상세 조회");
//  };

//  /** [관리자] 글 생성 */
//  async createPost (
//    req: Request<
//    adminCreatePostRequest["path"],
//    adminCreatePostResponse,
//    adminCreatePostRequest["body"],
//    adminCreatePostRequest["params"]
//  >,
//  res: Response,
//  next: NextFunction
//  ) {
//    res.send("[관리자] 글 생성");
//  }

//   /** [관리자] 글 수정 */
//  async updatePost (
//    req: Request<
//    adminCreatePostRequest["path"],
//    adminCreatePostResponse,
//    adminCreatePostRequest["body"],
//    adminCreatePostRequest["params"]
//  >,
//  res: Response,
//  next: NextFunction
//  ) {
//    res.send("[관리자] 글 수정");
//  }

//   /** [관리자] 글 삭제 */
//  async deletePost (
//    req: Request<
//    adminCreatePostRequest["path"],
//    adminCreatePostResponse,
//    adminCreatePostRequest["body"],
//    adminCreatePostRequest["params"]
//  >,
//  res: Response,
//  next: NextFunction
//  ) {
//    res.send("[관리자] 글 삭제");
//  }
// };

export default class AdminPostsController {
  
  private readonly _postsService: PostsService;
  constructor(_postsService: PostsService) {
    this._postsService = _postsService;
  }

  async getPosts (req: Request, res: Response, next: NextFunction) {
    try {
      res.send("글목록조회")
    } catch (error) {
      next(error);
    }
  }
  async getPostDetail (req: Request, res: Response, next: NextFunction) {
    try {
      res.send("글상세조회")
    } catch (error) {
      next(error);
    }
  }
  async createPost (req: Request, res: Response, next: NextFunction) {
    try {
      res.send("글작성")
    } catch (error) {
      next(error);
    }
  }
  async updatePost (req: Request, res: Response, next: NextFunction) {
    try {
      res.send("글수정")
    } catch (error) {
      next(error);
    }
  }
  async deletePost (req: Request, res: Response, next: NextFunction) {
    try {
      res.send("글삭제")
    } catch (error) {
      next(error);
    }
  }
}

