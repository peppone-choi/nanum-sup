import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";
import PostsViewController from "@/api/posts/controller/posts.view.controller";
import { PostsServiceImpl } from "@/api/posts/service/posts.service";
import { MongoosePostRepository } from "@/api/posts/repository/mongoosePost.repository";
import MongooseUserRepository from "@/api/user/repository/mongooseUser.repository";
import { MongooseCategoryRepository } from "@/api/category/repository/mongooseCategory.repository";
import { MongooseCommentRepository } from "@/api/comment/repository/mongooseComment.repository";
import { authCookieViewMiddleware } from "@/api/common/middlewares/authCookie.middleware";
import { CategoryServiceImpl } from "@/api/category/service/category.service";
import CommentServiceImpl from "@/api/comment/service/comment.service";
import MongooseLikeRepository from "@/api/like/repository/mongooseLike.repository";
import Like from "@/api/like/model/like.model";
import LikeServiceImpl from "@/api/like/service/like.service";

const postViewRouter = express.Router();

const POST_VIEW_ROUTES = {
  /** 게시글 목록 */
  POST_LIST: "/posts",
  /** 게시글 작성 */
  POST_WRITE: "/posts/write",
  POST_SHORT_URL: "/posts/s/:shortUrl",
  /** 게시글 상세 */
  POST_DETAIL: "/posts/:postId",
  /** 게시글 수정 */
  POST_EDIT: "/posts/:postId/edit",
} as const;

const postsViewController = new PostsViewController(
  new PostsServiceImpl(new MongoosePostRepository(), new MongooseUserRepository(), new MongooseCategoryRepository(), new MongooseCommentRepository(), new MongooseLikeRepository()),
  new CategoryServiceImpl(new MongooseCategoryRepository()),
  new CommentServiceImpl(new MongooseCommentRepository(), new MongooseUserRepository(), new MongoosePostRepository()),
  new LikeServiceImpl(new MongooseLikeRepository(), new MongooseUserRepository())
);

/** 게시글 목록 조회 */
postViewRouter.get(extractPath(POST_VIEW_ROUTES.POST_LIST, ROUTES_INDEX.POST_VIEW), authCookieViewMiddleware(true), postsViewController.postListPage);

/** 게시글 작성 */
postViewRouter.get(extractPath(POST_VIEW_ROUTES.POST_WRITE, ROUTES_INDEX.POST_VIEW), authCookieViewMiddleware(true), postsViewController.postWritePage);

/** 게시글 상세 조회 */
postViewRouter.get(extractPath(POST_VIEW_ROUTES.POST_SHORT_URL, ROUTES_INDEX.POST_VIEW), authCookieViewMiddleware(false), postsViewController.postDetailPageUrl);

postViewRouter.get(extractPath(POST_VIEW_ROUTES.POST_DETAIL, ROUTES_INDEX.POST_VIEW), authCookieViewMiddleware(false), postsViewController.postDetailPage);

// POST_WRITE: "/posts/write", POST_DETAIL: "/posts/:postId" => 정적패스를 동적패스 위에 적어줌
// postDetail이 postWrite 위에 있으면 /posts/write를 postId로 인식하기 때문에..!

/** 게시글 수정 */
postViewRouter.get(extractPath(POST_VIEW_ROUTES.POST_EDIT, ROUTES_INDEX.POST_VIEW), authCookieViewMiddleware(true), postsViewController.postEditPage);

export default postViewRouter;
