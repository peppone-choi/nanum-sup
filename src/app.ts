import express from "express";
import path from "node:path";
import morgan from "morgan";
import appRouter from "./routers/app.router";
import userRouter from "./routers/users.router";
import viewRouter from "./routers/views/view.router";
import adminViewRouter from "./routers/views/adminView.router";
import cookieParser from "cookie-parser";
import errorHandler from "./api/common/middlewares/errorHandler.middleware";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(appRouter);
app.use(userRouter);
app.use(viewRouter);
app.use(adminViewRouter);
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
