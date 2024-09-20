import express from "express";
import path from "node:path";
import morgan from "morgan";
import appRouter from "./routers/app.router";
import userRouter from "./routers/users.router";
import viewRouter from "./routers/views/view.router";
import adminViewRouter from "./routers/views/adminView.router";
import cookieParser from "cookie-parser";
import errorHandler from "./api/common/middlewares/errorHandler.middleware";
import dotenv from "dotenv";
import adminCategoryRouter from "./api/category/router/adminCategory.router";
import categoryRouter from "./api/category/router/category.router";
import { ROUTES_INDEX } from "./routers";
<<<<<<< HEAD
import postRouter from "./api/posts/router/posts.router";
import adminPostRouter from "./api/posts/router/adminPosts.router";
=======
import adminCategoryViewRouter from "./api/category/router/adminCategory.view.router";
import categoryViewRouter from "./api/category/router/category.view.router";
>>>>>>> develop

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(appRouter);
app.use(userRouter);
app.use(viewRouter);
app.use(adminViewRouter);
app.use(categoryRouter);
app.use(adminCategoryRouter);

/** -------- category ---------  */
app.use(ROUTES_INDEX.CATEGORY_API, categoryRouter);
app.use(ROUTES_INDEX.ADMIN_CATEGORY_API, adminCategoryRouter);
app.use(ROUTES_INDEX.ADMIN_CATEGORY_VIEW, adminCategoryViewRouter);
app.use(ROUTES_INDEX.CATEGORY_VIEW, categoryViewRouter);


/** -------- posts ---------  */
app.use(ROUTES_INDEX.POSTS_API, postRouter);
app.use(ROUTES_INDEX.ADMIN_POSTS_API, adminPostRouter);
// app.use(ROUTES_INDEX.ADMIN_POST_VIEW, adminPostViewRouter);
// app.use(ROUTES_INDEX.POST_VIEW, postViewRouter);



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
