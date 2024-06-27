import express, { Router } from "express";
import { saveCode } from "../controllers/codeEditorController";

export const codeEditorRouter = Router();

codeEditorRouter.post("/save", saveCode);
