import express from "express";

const adminViewRouter = express.Router();

const BASE_PATH = `/admin/views`;

adminViewRouter.get(`${BASE_PATH}/login`, (req, res) => {
  res.render(`admin/login`, {
    title: "관리자 로그인",
  });
});

export default adminViewRouter;
