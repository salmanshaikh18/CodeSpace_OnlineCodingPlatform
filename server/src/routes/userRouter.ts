import express from "express"
import { changePassword, login, logout, register } from "../controllers/userController"

export const userRouter = express.Router()

userRouter.post("/register", register)
userRouter.post("/login", login)
userRouter.post("/logout", logout)
userRouter.post("/change-password", changePassword)