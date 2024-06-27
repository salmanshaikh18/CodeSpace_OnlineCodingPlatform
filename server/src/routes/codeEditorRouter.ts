import express, { Router } from "express";
import { loadCode, saveCode } from "../controllers/codeEditorController";

export const codeEditorRouter = Router();

codeEditorRouter.post("/save", saveCode);
codeEditorRouter.post("/load", loadCode)