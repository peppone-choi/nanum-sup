import express from "express";
import AdminPostsController from "@/api/posts/controller/adminPosts.controller";
import { PostsServiceImpl } from "@/api/posts/service/posts.service";
import { validate } from "@/api/common/middlewares/validation.middleware";
import {
    adminCreatePostValidator,
    adminDeletePostValidator,
    adminGetPostDetailValidator,
    adminGetPostsValidator,
    adminUpdatePostValidator,
} from "@/api/posts/dto/validations/adminPost.validation";
import { MongoosePostRepository } from "@/api/posts/repository/mongoosePost.repository";
import { MongooseCategoryRepository } from "@/api/category/repository/mongooseCategory.repository";
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/routers";
import { authUserMiddleware } from "@/api/common/middlewares/authUser.middleware";
// import { MongooseCommentRepository } from "@/api/comment/repository/mongooseComment.repository";

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
    new PostsServiceImpl(
        new MongoosePostRepository(),
        // new MongooseUserRepository(),
        new MongooseCategoryRepository(),
        new MongooseCommentRepository()
    )
);

// adminPostRouter.get(
//   extractPath(ADMIN_POST_ROUTES.GET_POSTS, ROUTES_INDEX.ADMIN_POSTS_API),
//   validate(adminGetPostsValidator),
//   adminPostsController.getPosts
// );
// adminPostRouter.get(
//   extractPath(ADMIN_POST_ROUTES.GET_POST_DETAIL, ROUTES_INDEX.ADMIN_POSTS_API),
//   validate(adminGetPostDetailValidator),
//   authUserMiddleware,
//   adminPostsController.getPostDetail
// );
// adminPostRouter.post(
//   extractPath(ADMIN_POST_ROUTES.CREATE_POST, ROUTES_INDEX.ADMIN_POSTS_API),
//   validate(adminCreatePostValidator),
//   authUserMiddleware,
//   adminPostsController.createPost
// );
// adminPostRouter.put(
//   extractPath(ADMIN_POST_ROUTES.UPDATE_POST, ROUTES_INDEX.ADMIN_POSTS_API),
//   validate(adminUpdatePostValidator),
//   adminPostsController.updatePost
// );
// adminPostRouter.delete(
//   extractPath(ADMIN_POST_ROUTES.DELETE_POST, ROUTES_INDEX.ADMIN_POSTS_API),
//   validate(adminDeletePostValidator),
//   adminPostsController.deletePost
// );

export default adminPostRouter;
