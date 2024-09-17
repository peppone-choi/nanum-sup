import { healthCheck } from "@/api/controllers/common.controller";
import express from "express";

const appRouter = express.Router();

const BASE_PATH = "/api";

appRouter.get(`/${BASE_PATH}`, healthCheck);

export default appRouter;
