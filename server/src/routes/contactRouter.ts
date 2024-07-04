import express from "express"
import { ContactUs } from "../controllers/contactController"
export const contactRouter = express.Router()

contactRouter.post("/message", ContactUs)
