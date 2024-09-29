import express from "express";
import path from "node:path";
import morgan from "morgan";
import viewRouter from "./routers/views/view.router";
import adminViewRouter from "./routers/views/adminView.router";
import cookieParser from "cookie-parser";
import errorHandler from "./api/common/middlewares/errorHandler.middleware";
import dotenv from "dotenv";
import adminCategoryRouter from "./api/category/router/adminCategory.router";
import categoryRouter from "./api/category/router/category.router";
import { ROUTES_INDEX } from "./routers";
import postRouter from "./api/posts/router/posts.router";
import adminPostRouter from "./api/posts/router/adminPosts.router";
import adminPostViewRouter from "./api/posts/router/adminPosts.view.router";
import postViewRouter from "./api/posts/router/posts.view.router";
import adminCategoryViewRouter from "./api/category/router/adminCategory.view.router";
import categoryViewRouter from "./api/category/router/category.view.router";
import userRouter from "./api/user/router/user.router";
import adminUserRouter from "./api/user/router/adminUser.router";
import authRouter from "./api/auth/router/auth.router";
import adminUserViewRouter from "./api/user/router/adminUser.view.router";
import userViewRouter from "./api/user/router/user.view.router";
import uploadRouter from "./api/upload/router/upload.router";
import likeRouter from "./api/like/router/like.router";
import { ad } from "@faker-js/faker/dist/airline-C5Qwd7_q";
import adminLikeRouter from "./api/like/router/adminLike.router";
import followRouter from "./api/follow/router/follow.router";
import adminFollowRouter from "./api/follow/router/adminFollow.router";
import commentRouter from "./api/comment/router/comment.router";
import adminCommentRouter from "./api/comment/router/adminComment.router";
import reportRouter from "./api/report/router/userReport.router";
import adminReportRouter from "./api/report/router/adminReport.router";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(ROUTES_INDEX.AUTH_API, authRouter);

app.use(adminViewRouter);

/** -------- category ---------  */
app.use(ROUTES_INDEX.CATEGORY_API, categoryRouter);
app.use(ROUTES_INDEX.CATEGORY_VIEW, categoryViewRouter);
app.use(ROUTES_INDEX.ADMIN_CATEGORY_API, adminCategoryRouter);
app.use(ROUTES_INDEX.ADMIN_CATEGORY_VIEW, adminCategoryViewRouter);

/** -------- posts ---------  */
app.use(ROUTES_INDEX.POSTS_API, postRouter);
app.use(ROUTES_INDEX.ADMIN_POSTS_API, adminPostRouter);
app.use(ROUTES_INDEX.ADMIN_POST_VIEW, adminPostViewRouter);
app.use(ROUTES_INDEX.POST_VIEW, postViewRouter);

/** -------- users ---------  */
app.use(ROUTES_INDEX.USER_API, userRouter);
app.use(ROUTES_INDEX.ADMIN_USER_API, adminUserRouter);
app.use(ROUTES_INDEX.USER_VIEW, userViewRouter);
app.use(ROUTES_INDEX.ADMIN_USER_VIEW, adminUserViewRouter);

/** -------- comment ---------  */
app.use(ROUTES_INDEX.COMMENT_API, commentRouter);
app.use(ROUTES_INDEX.ADMIN_COMMENT_API, adminCommentRouter);

/** -------- upload ---------  */
app.use(ROUTES_INDEX.UPLOAD_API, uploadRouter);

/** -------- like ---------  */
app.use(ROUTES_INDEX.LIKE_API, likeRouter);
app.use(ROUTES_INDEX.ADMIN_LIKE_API, adminLikeRouter);

/** -------- follow ---------  */
app.use(ROUTES_INDEX.FOLLOW_API, followRouter);
app.use(ROUTES_INDEX.ADMIN_FOLLOW_API, adminFollowRouter);

/** -------- report ---------  */
app.use(ROUTES_INDEX.REPORT_API, reportRouter);
app.use(ROUTES_INDEX.ADMIN_REPORT_API, adminReportRouter);

/** -------- view ---------  */
app.use(viewRouter);

const PORT = process.env.PORT || 4000;
// view 파일들 모아놓는 위치 설정
app.set("views", path.join(__dirname, "views"));
// view engine 세팅
app.set("view engine", "ejs");

app.use(morgan("dev")); // 로그 찍어주는 미들웨어
app.use("/static", express.static(path.join(__dirname, "../public"))); // 정적 파일 제공 미들웨어

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
