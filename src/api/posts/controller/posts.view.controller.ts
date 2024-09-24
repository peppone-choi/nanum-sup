import { NextFunction, Request, Response } from "express";
import { PostsService } from "@/api/posts/service/posts.service.type";

// [사용자]
// 글 목록 조회 - getPosts
// 글 상세 조회 - getPostDetail
// 글 생성 - createPost
// 글 수정 - updatePost
// 글 삭제 - deletePost

export default class PostsViewController {
  private readonly _postsService: PostsService;
  // static postListPage: RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>>;
  constructor(_postsService: PostsService) {
    this._postsService = _postsService;

    this.postListPage = this.postListPage.bind(this);
    this.postDetailPage = this.postDetailPage.bind(this);
    this.postWritePage = this.postWritePage.bind(this);
    this.postEditPage = this.postEditPage.bind(this);
  }

  /** 게시글 목록 페이지 */
  async postListPage(req: Request, res: Response, next: NextFunction) {
    res.render("client/posts/postList");

    const posts = await this._postsService.getPosts();

    res.render("client/posts/postList", {
      posts
      
    });
  }

  /** 게시글 상세 페이지 */
  async postDetailPage(req: Request, res: Response, next: NextFunction) {
    const post = await this._postsService.getPostDetail(req.params.postId);

    const authorId = post?.author.accountId;

    res.render("client/posts/postDetail", {
      post,
      isMe: authorId === req.user.userId,
    });
  }

  /** 게시글 작성 페이지 */
  async postWritePage(req: Request, res: Response, next: NextFunction) {
    res.render("client/posts/postWrite");
  }

  /** 게시글 수정 페이지 */
  async postEditPage(req: Request, res: Response, next: NextFunction) {
    const { postId } = req.params;

    const userId = req.user.userId;

    const post = await this._postsService.getPostDetail(postId);

    const isMe = userId === post?.author.accountId;

    if (!isMe) {
      res.send(`<script>
          alert("권한이 없습니다."); location.href="/posts/${postId}";
        </script>`);
    }

    res.render("client/posts/postEdit", { post });
  }
}