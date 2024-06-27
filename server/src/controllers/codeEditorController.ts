import { Request, Response } from "express";
import { Code } from "../models/codeSchema";

export const saveCode = async (req: Request, res: Response) => {
  const { fullCode } = req.body;
  try {
    const newCode = await Code.create({
      fullCode: fullCode,
    });
    return res.status(201).json({
        message: "Code Saved Successfully :)",
        savedCode: fullCode
    });
  } catch (error) {
    return res.status(500).send({ message: "Error while saving code", error });
  }
};
