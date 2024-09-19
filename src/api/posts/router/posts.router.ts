import express from "express";
import PostsController from "@/api/posts/controller/posts.controller";
import { PostsServiceImpl } from "../service/posts.service";

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
  new PostsServiceImpl()
)

postRouter.get(
  POST_ROUTES.GET_POSTS,
  postsController.getPosts
);
postRouter.get(
  POST_ROUTES.GET_POST_DETAIL,
  postsController.getPostDetail
);
postRouter.post(
  POST_ROUTES.CREATE_POST,
  postsController.createPost
);
postRouter.put(
  POST_ROUTES.UPDATE_POST,
  postsController.updatePost
);
postRouter.delete(
  POST_ROUTES.DELETE_POST,
  postsController.deletePost
);

