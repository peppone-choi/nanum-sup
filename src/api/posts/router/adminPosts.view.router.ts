import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";



const adminPostViewRouter = express.Router();

const ADMIN_POST_VIEW_ROUTES = {
    /** 게시글 목록 */
    POST_LIST: "/admin/posts",
    /** 게시글 상세 | 수정 */
    POST_DETAIL: "/posts/:postId",
} as const;


adminPostViewRouter.get(
  extractPath(ADMIN_POST_VIEW_ROUTES.POST_LIST, ROUTES_INDEX.ADMIN_POST_VIEW),
  (req, res, next) => {
    res.render("admin/posts/postList");
  }
);

adminPostViewRouter.get(
  extractPath(ADMIN_POST_VIEW_ROUTES.POST_DETAIL, ROUTES_INDEX.ADMIN_POST_VIEW),
  (req, res, next) => {
    res.render("admin/posts/postDetail");
  }
);

export default adminPostViewRouter;