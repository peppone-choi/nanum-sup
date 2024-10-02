import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";
import AdminPostsViewController from "@/api/posts/controller/adminPosts.view.controller";
import { MongooseCategoryRepository } from "@/api/category/repository/mongooseCategory.repository";
import { MongooseCommentRepository } from "@/api/comment/repository/mongooseComment.repository";
import MongooseUserRepository from "@/api/user/repository/mongooseUser.repository";
import { MongoosePostRepository } from "@/api/posts/repository/mongoosePost.repository";
import { PostsServiceImpl } from "@/api/posts/service/posts.service";
import { ne } from "@faker-js/faker/.";
import MongooseLikeRepository from "@/api/like/repository/mongooseLike.repository";

const adminPostViewRouter = express.Router();

const ADMIN_POST_VIEW_ROUTES = {
  /** 게시글 목록 */
  POST_LIST: "/admin/posts",
  /** 게시글 상세 | 수정 */
  POST_DETAIL: "/admin/posts/:postId",
} as const;

const adminPostViewController = new AdminPostsViewController(
  new PostsServiceImpl(new MongoosePostRepository(), new MongooseUserRepository(), new MongooseCategoryRepository(), new MongooseCommentRepository(), new MongooseLikeRepository())
);

/** 게시글 목록 조회 */
adminPostViewRouter.get(extractPath(ADMIN_POST_VIEW_ROUTES.POST_LIST, ROUTES_INDEX.ADMIN_POST_VIEW), adminPostViewController.postListPage);

/** 게시글 상세 조회 | 수정 */
adminPostViewRouter.get(extractPath(ADMIN_POST_VIEW_ROUTES.POST_DETAIL, ROUTES_INDEX.ADMIN_POST_VIEW), adminPostViewController.postDetailPage);

export default adminPostViewRouter;
