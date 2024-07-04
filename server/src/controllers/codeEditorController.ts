import { Request, Response } from "express";
import { Code } from "../models/CodeSchema";
import { fullCodeType } from "../types/codeEditorTypes";
import { AuthRequest } from "../middlewares/verifyToken";
import { User } from "../models/UserSchema";

export const saveCode = async (req: AuthRequest, res: Response) => {
  const { fullCode, title }: { fullCode: fullCodeType; title: string } =
    req.body;
  let ownerName = "Anonymous";
  let user = undefined;
  let ownerInfo = undefined;
  let isAuthenticated = false;

  if (req._id) {
    user = await User.findById(req._id);
    if (!user) {
      return res.status(404).send({ message: "User not found!" });
    }
    ownerName = user?.username;
    ownerInfo = user._id;
    isAuthenticated = true;
  }

  if (!fullCode.html && !fullCode.css && !fullCode.javascript) {
    return res.status(400).json({ message: "Code cannot be blank!" });
  }
  try {
    const newCode = await Code.create({
      fullCode: fullCode,
      ownerName: ownerName,
      ownerInfo: ownerInfo,
      title: title,
    });
    if (isAuthenticated && user) {
      user.savedCodes.push(newCode._id);
      await user.save();
    }
    return res.status(201).json({ url: newCode._id, status: "saved!" });
  } catch (error) {
    return res.status(500).json({ message: "Error while saving code", error });
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
      fullCode: existingCode.fullCode,
    });
  } catch (error) {
    console.error("Error while loading code:", error);
    return res.status(500).json({
      message: "Error while loading code. So, default code is loaded",
      error,
    });
  }
};
