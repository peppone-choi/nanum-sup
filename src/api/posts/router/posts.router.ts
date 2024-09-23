// import { MongooseUserRepository } from '@/api/users/repository/user/mongooseUser.repository';
import express from "express";
import PostsController from "@/api/posts/controller/posts.controller";
import { PostsServiceImpl } from "@/api/posts/service/posts.service";
import {
    createPostValidator,
    deletePostValidator,
    getPostDetailValidator,
    getPostsValidator,
    updatePostValidator,
} from "@/api/posts/dto/validations/post.validation";
import { validate } from "@/api/common/middlewares/validation.middleware";
import { MongoosePostRepository } from "@/api/posts/repository/mongoosePost.repository";
import { MongooseCategoryRepository } from "@/api/category/repository/mongooseCategory.repository";
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/routers";
import { authUserMiddleware } from "@/api/common/middlewares/authUser.middleware";
// import { MongooseCommentRepository } from "@/api/comment/repository/mongooseComment.repository";

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

// const postsController = new PostsController(
//   new PostsServiceImpl(
//     new MongoosePostRepository(),
//     // new MongooseUserRepository(),
//     new MongooseCategoryRepository(),
//     new MongooseCommentRepository(),
//   )
// );

// postRouter.get(
//   extractPath(POST_ROUTES.GET_POSTS, ROUTES_INDEX.POSTS_API),
//   validate(getPostsValidator),
//   postsController.getPosts
// );
// postRouter.get(
//   extractPath(POST_ROUTES.GET_POST_DETAIL, ROUTES_INDEX.POSTS_API),
//   validate(getPostDetailValidator),
//   authUserMiddleware,
//   postsController.getPostDetail
// );
// postRouter.post(
//   extractPath(POST_ROUTES.CREATE_POST, ROUTES_INDEX.POSTS_API),
//   validate(createPostValidator),
//   authUserMiddleware,
//   postsController.createPost
// );
// postRouter.put(
//   extractPath(POST_ROUTES.UPDATE_POST, ROUTES_INDEX.POSTS_API),
//   validate(updatePostValidator),
//   postsController.updatePost
// );
// postRouter.delete(
//   extractPath(POST_ROUTES.DELETE_POST, ROUTES_INDEX.POSTS_API),
//   validate(deletePostValidator),
//   postsController.deletePost
// );

export default postRouter;
