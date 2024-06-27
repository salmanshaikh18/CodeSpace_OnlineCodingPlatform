import express from "express"
import { login, logout, register } from "../controllers/userController"

export const userRouter = express.Router()

userRouter.post("/register", register)
userRouter.post("/login", login)
userRouter.post("/logout", logout)