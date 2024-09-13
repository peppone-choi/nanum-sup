import express from "express";

const adminViewRouter = express.Router();

const BASE_PATH = `/admin/views`;

adminViewRouter.get(`${BASE_PATH}/login`, (req, res) => {
  res.render(`admin/login`);
});

export default adminViewRouter;
