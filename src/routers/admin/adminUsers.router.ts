import express from "express";

const adminUserRouter = express.Router();

const BASE_PATH = "/users";

adminUserRouter.get(`${BASE_PATH}`, (req, res) => {
  res.send("GET request to the users page");
});

adminUserRouter.post(`${BASE_PATH}`, (req, res) => {
   res.send("다영짱 POST request to the users");
});

adminUserRouter.put(`${BASE_PATH}`, (req, res) => {
  console.log("/users put");
  res.json({ message: "User updated" });
});

adminUserRouter.patch(`${BASE_PATH}`, (req, res) => {
  res.send("현영짱 PATCH request to the users");
});

adminUserRouter.delete(`${BASE_PATH}`, (req, res) => {
  res.send("동준짱 DELETE request to the users");
});

adminUserRouter.get()