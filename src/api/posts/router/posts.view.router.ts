import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";

const postViewRouter = express.Router();

const POST_VIEW_ROUTES = {
  /** 게시글 목록 */
  POST_LIST: "/posts",
  /** 게시글 작성 */
  POST_WRITE: "/posts/write",
  POST_SHORT_URL: "/posts/:shortUrl",
  /** 게시글 상세 */
  POST_DETAIL: "/posts/:postId",
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
  extractPath(POST_VIEW_ROUTES.POST_SHORT_URL, ROUTES_INDEX.POST_VIEW),
  (req, res, next) => {
    const { shortUrl } = req.params;
    res.render("client/posts/postDetail");
  }
);

postViewRouter.get(
  extractPath(POST_VIEW_ROUTES.POST_DETAIL, ROUTES_INDEX.POST_VIEW),
  (req, res, next) => {
    res.render("client/posts/postDetail");
  }
);

// POST_WRITE: "/posts/write", POST_DETAIL: "/posts/:postId" => 정적패스를 동적패스 위에 적어줌
// postDetail이 postWrite 위에 있으면 /posts/write를 postId로 인식하기 때문에..!

postViewRouter.get(
  extractPath(POST_VIEW_ROUTES.POST_EDIT, ROUTES_INDEX.POST_VIEW),
  (req, res, next) => {
    res.render("client/posts/postEdit");
  }
);

export default postViewRouter;
