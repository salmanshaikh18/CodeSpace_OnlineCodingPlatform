import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
    const {username, email, password} = req.body
    try {
        if 
    } catch (error) {
        return res.status(500).json({
            message: "Oops! Something went wrong while register. Please try again later or contact support for assistance.!",
            error: error
        })
    }
}