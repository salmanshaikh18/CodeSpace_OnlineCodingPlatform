import express, { Router } from "express";
import { deleteCode, editCode, getAllCodes, getMyCodes, loadCode, saveCode } from "../controllers/codeEditorController";
import { verifyToken } from "../middlewares/verifyToken";
// import { verifyTokenAnonymous } from "../middlewares/verifyTokenAnonymous";

export const codeEditorRouter = Router();

codeEditorRouter.post("/save", verifyToken, saveCode);
codeEditorRouter.post("/load", verifyToken, loadCode)
codeEditorRouter.delete("/delete/:id", verifyToken, deleteCode)
codeEditorRouter.put("/edit/:id", verifyToken, editCode);
codeEditorRouter.get("/my-repositories", verifyToken, getMyCodes)
codeEditorRouter.get("/all-repositories", verifyToken, getAllCodes)