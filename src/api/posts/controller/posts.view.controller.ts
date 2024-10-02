import { NextFunction, Request, Response } from "express";
import { PostsService } from "@/api/posts/service/posts.service.type";
import { CategoryService } from "@/api/category/service/category.service.type";
import { CommentService } from "@/api/comment/service/comment.service.type";
import LikeService from "@/api/like/service/like.service.type";

// [사용자]
// 글 목록 조회 - getPosts
// 글 상세 조회 - getPostDetail
// 글 생성 - createPost
// 글 수정 - updatePost
// 글 삭제 - deletePost

export default class PostsViewController {
  private readonly _postsService: PostsService;
  private readonly _categoryService: CategoryService;
  private readonly _commentService: CommentService;
  private readonly _likeService: LikeService;
  // static postListPage: RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>>;
  constructor(_postsService: PostsService, _categoryService: CategoryService, _commentService: CommentService, _likeService: LikeService) {
    this._categoryService = _categoryService;
    this._postsService = _postsService;
    this._commentService = _commentService;
    this._likeService = _likeService;
    this.postListPage = this.postListPage.bind(this);
    this.postDetailPage = this.postDetailPage.bind(this);
    this.postWritePage = this.postWritePage.bind(this);
    this.postEditPage = this.postEditPage.bind(this);
  }

  /** 게시글 목록 페이지 */
  async postListPage(req: Request, res: Response, next: NextFunction) {
    // res.render("client/posts/postList");
    const { userId } = req.user;
    const posts = await this._postsService.getPosts();
    const category = await this._categoryService.getCategory();
    const likedPosts = posts.filter((post) => post.likes.some((like) => like.user.id === userId));
    console.log(likedPosts);
    res.render("client/posts/postList", {
      posts,
      category,
      likedPosts,
      userId,
    });
  }

  /** 게시글 상세 페이지 */
  async postDetailPage(req: Request, res: Response, next: NextFunction) {
    const post = await this._postsService.getPostDetail(req.params.postId);
    const authorId = post?.author.accountId;
    const category = await this._categoryService.getCategory();
    const userId = req.user.userId;
    const liked = post?.likes ? await Promise.all(post.likes.map(async (like) => await this._likeService.likedByUser(req.user.userId, like.id))) : [];
    const likeId = post?.likes.find((like) => like.user.id === userId)?.id;
    console.log(liked);
    res.render("client/posts/postDetail", {
      post,
      isMe: authorId === req.user.userId,
      category,
      userId,
      likeId,
    });
  }

  /** 게시글 작성 페이지 */
  async postWritePage(req: Request, res: Response, next: NextFunction) {
    const category = await this._categoryService.getCategory();
    const post = {
      category: {
        id: "",
        title: "",
      },
    };
    res.render("client/posts/postWrite", { post, category });
  }

  /** 게시글 수정 페이지 */
  async postEditPage(req: Request, res: Response, next: NextFunction) {
    const { postId } = req.params;

    const userId = req.user.userId;

    const post = await this._postsService.getPostDetail(postId);

    const isMe = userId === post?.author.id;

    // console.log(userId, post?.author);
    const category = await this._categoryService.getCategory();

    if (!isMe) {
      res.send(`<script>
          alert("권한이 없습니다."); location.href="/posts/${postId}";
        </script>`);
    }

    res.render("client/posts/postEdit", { post, category });
  }
}
