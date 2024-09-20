import express from "express";
import PostsController from "@/api/posts/controller/posts.controller";
import { PostsServiceImpl } from "../service/posts.service";
import { MemoryPostRepository } from "../repository/memoryPost.repository";
import {
  createPostValidator,
  deletePostValidator,
  getPostDetailValidator,
  getPostsValidator,
  updatePostValidator,
} from "../dto/validations/post.validation";
import { validate } from "@/api/common/middlewares/validation.middleware";


const postRouter = express.Router();

/** 사용자 게시글 API 객체 */
const POST_ROUTES = {
  /** [사용자] 게시글 목록조회 */
  GET_POSTS: `/api/posts`,
  /** [사용자] 게시글 상세조회 */
  GET_POST_DETAIL: `/api/posts/:postId`,
  /** [사용자] 게시글 작성 */
  CREATE_POST: `/api/posts`,
  /** [사용자] 게시글 수정 */
  UPDATE_POST: `/api/posts/:postId`,
  /** [사용자] 게시글 삭제 */
  DELETE_POST: `/api/posts/:postId`,
} as const;

const postsController = new PostsController(
  new PostsServiceImpl(new MemoryPostRepository(), newMemoryUserRepository())
);

postRouter.get(
  POST_ROUTES.GET_POSTS,
  validate(getPostsValidator),
  postsController.getPosts
);
postRouter.get(
  POST_ROUTES.GET_POST_DETAIL,
  validate(getPostDetailValidator),
  postsController.getPostDetail
);
postRouter.post(
  POST_ROUTES.CREATE_POST,
  validate(createPostValidator),
  postsController.createPost
);
postRouter.put(
  POST_ROUTES.UPDATE_POST,
  validate(updatePostValidator),
  postsController.updatePost
);
postRouter.delete(
  POST_ROUTES.DELETE_POST,
  validate(deletePostValidator),
  postsController.deletePost
);

