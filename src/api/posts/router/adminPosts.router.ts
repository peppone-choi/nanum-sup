import express from "express";
import AdminPostsController from "@/api/posts/controller/adminPosts.controller";
import { PostsServiceImpl } from "../service/posts.service";
import { MemoryPostRepository } from "../repository/memoryPost.repository";
import { validate } from "@/api/common/middlewares/validation.middleware";
import { adminCreatePostValidator, adminDeletePostValidator, adminGetPostDetailValidator, adminGetPostsValidator, adminUpdatePostValidator } from "../dto/validations/adminPost.validation";

const adminPostRouter = express.Router();

/** 관리자 게시글 API 객체 */
const ADMIN_POST_ROUTES = {
  /** [관리자] 게시글 목록조회 */
  GET_POSTS: `/admin-api/posts`,
  /** [관리자] 게시글 상세조회 */
  GET_POST_DETAIL: `/admin-api/posts/:postId`,
  /** [관리자] 게시글 작성 */
  CREATE_POST: `/admin-api/posts`,
  /** [관리자] 게시글 수정 */
  UPDATE_POST: `/admin-api/posts/:postId`,
  /** [관리자] 게시글 삭제 */
  DELETE_POST: `/admin-api/posts/:postId`,
} as const;


const adminPostsController = new AdminPostsController(
  new PostsServiceImpl(new MemoryPostRepository(), new MemoryUserRepository())
);



adminPostRouter.get(
  ADMIN_POST_ROUTES.GET_POSTS,
  validate(adminGetPostsValidator),
  adminPostsController.getPosts
);
adminPostRouter.get(
  ADMIN_POST_ROUTES.GET_POST_DETAIL,
  validate(adminGetPostDetailValidator),
  adminPostsController.getPostDetail
);
adminPostRouter.post(
  ADMIN_POST_ROUTES.CREATE_POST,
  validate(adminCreatePostValidator),
  adminPostsController.createPost
);
adminPostRouter.put(
  ADMIN_POST_ROUTES.UPDATE_POST,
  validate(adminUpdatePostValidator),
  adminPostsController.updatePost
);
adminPostRouter.delete(
  ADMIN_POST_ROUTES.DELETE_POST,
  validate(adminDeletePostValidator),
  adminPostsController.deletePost
);

