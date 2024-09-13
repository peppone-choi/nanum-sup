import express from "express";

const userRouter = express.Router();

const BASE_PATH = "/api/users";

userRouter.get(`${BASE_PATH}`, (req, res) => {
  res.send("GET request to the users page");
});

userRouter.post(`${BASE_PATH}`, (req, res) => {
  res.send("다영짱 POST request to the users");
});

userRouter.put(`${BASE_PATH}`, (req, res) => {
  console.log("/users put");
  res.json({ message: "User updated" });
});

userRouter.patch(`${BASE_PATH}`, (req, res) => {
  res.send("현영짱 PATCH request to the users");
});

userRouter.delete(`${BASE_PATH}`, (req, res) => {
  res.send("동준짱 DELETE request to the users");
});

export default userRouter;
