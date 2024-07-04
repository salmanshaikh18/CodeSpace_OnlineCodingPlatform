import express from "express"
import { ContactUs } from "../controllers/contactUsController"
export const contactRouter = express.Router()

contactRouter.post("/message", ContactUs)
