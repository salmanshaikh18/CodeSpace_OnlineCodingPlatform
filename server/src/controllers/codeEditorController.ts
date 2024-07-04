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

export const loadCode = async (req: AuthRequest, res: Response) => {
  const { urlId } = req.body;
  const userId = req._id;
  let isOwner = false;
  try {
    const existingCode = await Code.findById(urlId);
    if (!existingCode) {
      return res.status(404).json({ message: "Code Not Found!" });
    }
    const user = await User.findById(userId);
    if (user?.username === existingCode.ownerName) {
      isOwner = true;
    }
    // console.log(existingCode?._id); // Logging the ID if found
    return res.status(200).json({
      message: "Code loaded successfully :)",
      fullCode: existingCode.fullCode,
      isOwner: isOwner,
    });
  } catch (error) {
    console.error("Error while loading code:", error);
    return res.status(500).json({
      message: "Error while loading code. So, default code is loaded",
      error,
    });
  }
};

export const getMyCodes = async (req: AuthRequest, res: Response) => {
  const userId = req._id;
  try {
    const user = await User.findById(userId).populate({
      path: "savedCodes",
      options: { sort: { createdAt: -1 } },
    });

    if (!user) {
      return res.status(404).json({ message: "Cannot find User!" });
    }
    return res.status(200).send(user.savedCodes);
  } catch (error) {
    return res.status(500).json({ message: "Error loading my codes!", error });
  }
};

export const deleteCode = async (req: AuthRequest, res: Response) => {
  const userId = req._id;
  const { id } = req.params;
  try {
    const owner = await User.findById(userId);
    if (!owner) {
      return res
        .status(404)
        .send({ message: "Cannot find the owner profile!" });
    }
    const existingCode = await Code.findById(id);
    if (!existingCode) {
      return res.status(404).json({ message: "Code not found" });
    }
    if (existingCode.ownerName !== owner.username) {
      return res
        .status(400)
        .send({ message: "You don't have permission to delete this code!" });
    }
    const deleteCode = await Code.findByIdAndDelete(id);
    if (deleteCode) {
      return res.status(200).json({ message: "Code Deleted successfully!" });
    } else {
      return res.status(404).json({ message: "Code not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error deleting code!", error });
  }
};

export const editCode = async (req: AuthRequest, res: Response) => {
  const userId = req._id;
  const postId = req.params.id;
  const fullCode = req.body;
  try {
    const owner = await User.findById(userId);
    if (!owner) {
      return res.status(404).send({ message: "cannot find owner!" });
    }
    const existingPost = await Code.findById(postId);
    if (!existingPost) {
      return res.status(404).send({ message: "Cannot find post to edit!" });
    }
    if (existingPost.ownerName !== owner.username) {
      return res
        .status(400)
        .send({ message: "You don't have permission to edit this post!" });
    }
    await Code.findByIdAndUpdate(postId, {
      fullCode: fullCode,
    });
    return res.status(200).send({ message: "Post updated successfully" });
  } catch (error) {
    return res.status(500).send({ message: "Error editing code!", error });
  }
};
