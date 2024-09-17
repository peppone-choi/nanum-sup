import express from "express";

const viewRouter = express.Router();

const BASE_PATH = "/views";

// viewRouter.get(`${BASE_PATH}/login`, (req, res) => {
//   res.render(`login`);
// });

// viewRouter.get(`${BASE_PATH}`, (req, res) => {
//   res.render("index", {
//     title: "홈",
//   });
// });

export default viewRouter;
