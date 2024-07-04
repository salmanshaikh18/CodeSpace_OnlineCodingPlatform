import express, { Router } from "express";
import { loadCode, saveCode } from "../controllers/codeEditorController";
import { verifyToken } from "../middlewares/verifyToken";
// import { verifyTokenAnonymous } from "../middlewares/verifyTokenAnonymous";

export const codeEditorRouter = Router();

codeEditorRouter.post("/save", verifyToken, saveCode);
codeEditorRouter.post("/load", loadCode)