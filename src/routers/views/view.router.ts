import express from "express";

const viewRouter = express.Router();

const BASE_PATH = "";

viewRouter.get(`${BASE_PATH}/login`, (req, res) => {
  res.render(`login`, {
    title: "로그인",
  });
});

viewRouter.get(`${BASE_PATH}`, (req, res) => {
  res.render("index", {
    title: "홈",
  });
});

viewRouter.get(`${BASE_PATH}/signup`, (req, res) => {
  res.render("signUp", {
    title: "회원가입",
  });
});

export default viewRouter;
