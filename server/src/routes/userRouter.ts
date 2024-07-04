import express from "express"
import { changePassword, login, logout, register, userDetails } from "../controllers/userController"
import { verifyToken } from "../middlewares/verifyToken"
import { getMyCodes } from "../controllers/codeEditorController"

export const userRouter = express.Router()

userRouter.post("/register", register)
userRouter.post("/login", login)
userRouter.post("/logout", logout)
userRouter.post("/change-password", changePassword)
userRouter.get("/user-details", verifyToken, userDetails);
userRouter.get("/my-repositories", verifyToken, getMyCodes)
