import { Request, Response } from "express";
import { Code } from "../models/codeSchema";
import { fullCodeType } from "../types/codeEditorTypes";

export const saveCode = async (req: Request, res: Response) => {
  const fullCode: fullCodeType = req.body;
  if (!fullCode.html && !fullCode.css && !fullCode.javascript) {
    return res.status(400).json({
      message: "Code cannot be blank!",
    });
  }
  try {
    const newCode = await Code.create({
      fullCode: fullCode,
    });
    return res.status(201).json({
      message: "Code Saved Successfully :)",
      url: newCode._id,
      savedCode: fullCode,
    });
  } catch (error) {
    return res.status(500).send({ message: "Error while saving code ", error });
  }
};

export const loadCode = async (req: Request, res: Response) => {
  const { urlId } = req.body;
  try {
    const existingCode = await Code.findById(urlId);
    if (!existingCode) {
      return res.status(404).json({ message: "Code Not Found!" });
    }
    // console.log(existingCode?._id); // Logging the ID if found
    return res.status(200).json({
      message: "Code loaded successfully :)",
      loadedCode: existingCode.fullCode,
    });
  } catch (error) {
    console.error("Error while loading code:", error);
    return res.status(500).json({ message: "Error while loading code", error });
  }
};
