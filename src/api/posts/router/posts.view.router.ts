import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";

const postViewRouter = express.Router();

const POST_VIEW_ROUTES = {
  /** 게시글 목록 */
  POST_LIST: "/posts",
  /** 게시글 상세 */
  POST_DETAIL: "/posts/:postId",
  /** 게시글 작성 */
  POST_WRITE: "/posts/write",
  /** 게시글 수정 */
  POST_EDIT: "/posts/:postId/edit",
} as const;

postViewRouter.get(
  extractPath(POST_VIEW_ROUTES.POST_LIST, ROUTES_INDEX.POST_VIEW),
  (req, res, next) => {
    res.render("client/posts/postList");
  }
);

postViewRouter.get(
  extractPath(POST_VIEW_ROUTES.POST_WRITE, ROUTES_INDEX.POST_VIEW),
  (req, res, next) => {
    res.render("client/posts/postWrite");
  }
);

postViewRouter.get(
  extractPath(POST_VIEW_ROUTES.POST_DETAIL, ROUTES_INDEX.POST_VIEW),
  (req, res, next) => {
    res.render("client/posts/postDetail");
  }
);

postViewRouter.get(
  extractPath(POST_VIEW_ROUTES.POST_EDIT, ROUTES_INDEX.POST_VIEW),
  (req, res, next) => {
    res.render("client/posts/postEdit");
  }
);

export default postViewRouter;