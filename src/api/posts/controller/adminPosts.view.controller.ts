import { NextFunction, Request, Response } from "express";
import { PostsService } from "@/api/posts/service/posts.service.type";

// [관리자]
// 글 목록 조회 - getPosts
// 글 상세 조회 - getPostDetail
// 글 생성 - createPost
// 글 수정 - updatePost
// 글 삭제 - deletePost

export default class AdminPostsViewController {
  private readonly _postsService: PostsService;
  constructor(_postsService: PostsService) {
    this._postsService = _postsService;

    this.postListPage = this.postListPage.bind(this);
    this.postDetailPage = this.postDetailPage.bind(this);
  }

  /** [관리자] 게시글 목록 페이지 */
  async postListPage(req: Request, res: Response, next: NextFunction) {
    const posts = await this._postsService.getPosts();
    res.render("admin/posts/postList", {
      posts,
      // posts: [
      //   {
      //     postId: "11",
      //     title: "게시글 제목 1",
      //     content: "게시글 내용 1"
      //   },
      //   {
      //     postId: "22",
      //     title: "게시글 제목 2",
      //     content: "게시글 내용 2"
      //   },
      // ],
    });
  }

  /** [관리자] 게시글 상세 페이지 */
  async postDetailPage(req: Request, res: Response, next: NextFunction) {
    try {
      const { postId } = req.params;
      const post = await this._postsService.getPostDetail(postId);
      res.render("admin/posts/postDetail", {
        post,
      });
    } catch (error: any) {
      res.send(`<script>alert('${error.message}');
          location.href='/admin/posts';</script>`);
    }
  }
}