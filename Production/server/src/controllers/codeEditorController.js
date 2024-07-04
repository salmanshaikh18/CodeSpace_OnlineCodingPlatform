"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCodes = exports.editCode = exports.deleteCode = exports.getMyCodes = exports.loadCode = exports.saveCode = void 0;
const CodeSchema_1 = require("../models/CodeSchema");
const UserSchema_1 = require("../models/UserSchema");
const saveCode = async (req, res) => {
    const { fullCode, title } = req.body;
    let ownerName = "Anonymous";
    let user = undefined;
    let ownerInfo = undefined;
    let isAuthenticated = false;
    if (req._id) {
        user = await UserSchema_1.User.findById(req._id);
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
        const newCode = await CodeSchema_1.Code.create({
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
    }
    catch (error) {
        return res.status(500).json({ message: "Error while saving code", error });
    }
};
exports.saveCode = saveCode;
const loadCode = async (req, res) => {
    const { urlId } = req.body;
    const userId = req._id;
    let isOwner = false;
    try {
        const existingCode = await CodeSchema_1.Code.findById(urlId);
        if (!existingCode) {
            return res.status(404).json({ message: "Code Not Found!" });
        }
        const user = await UserSchema_1.User.findById(userId);
        if (user?.username === existingCode.ownerName) {
            isOwner = true;
        }
        // console.log(existingCode?._id); // Logging the ID if found
        return res.status(200).json({
            message: "Code loaded successfully :)",
            fullCode: existingCode.fullCode,
            isOwner: isOwner,
        });
    }
    catch (error) {
        console.error("Error while loading code:", error);
        return res.status(500).json({
            message: "Error while loading code. So, default code is loaded",
            error,
        });
    }
};
exports.loadCode = loadCode;
const getMyCodes = async (req, res) => {
    const userId = req._id;
    try {
        const user = await UserSchema_1.User.findById(userId).populate({
            path: "savedCodes",
            options: { sort: { createdAt: -1 } },
        });
        if (!user) {
            return res.status(404).json({ message: "Cannot find User!" });
        }
        return res.status(200).send(user.savedCodes);
    }
    catch (error) {
        return res.status(500).json({ message: "Error loading my codes!", error });
    }
};
exports.getMyCodes = getMyCodes;
const deleteCode = async (req, res) => {
    const userId = req._id;
    const { id } = req.params;
    try {
        const owner = await UserSchema_1.User.findById(userId);
        if (!owner) {
            return res
                .status(404)
                .send({ message: "Cannot find the owner profile!" });
        }
        const existingCode = await CodeSchema_1.Code.findById(id);
        if (!existingCode) {
            return res.status(404).json({ message: "Code not found" });
        }
        if (existingCode.ownerName !== owner.username) {
            return res
                .status(400)
                .send({ message: "You don't have permission to delete this code!" });
        }
        const deleteCode = await CodeSchema_1.Code.findByIdAndDelete(id);
        if (deleteCode) {
            return res.status(200).json({ message: "Code Deleted successfully!" });
        }
        else {
            return res.status(404).json({ message: "Code not found" });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "Error deleting code!", error });
    }
};
exports.deleteCode = deleteCode;
const editCode = async (req, res) => {
    const userId = req._id;
    const postId = req.params.id;
    const fullCode = req.body;
    try {
        const owner = await UserSchema_1.User.findById(userId);
        if (!owner) {
            return res.status(404).send({ message: "cannot find owner!" });
        }
        const existingPost = await CodeSchema_1.Code.findById(postId);
        if (!existingPost) {
            return res.status(404).send({ message: "Cannot find post to edit!" });
        }
        if (existingPost.ownerName !== owner.username) {
            return res
                .status(400)
                .send({ message: "You don't have permission to edit this post!" });
        }
        await CodeSchema_1.Code.findByIdAndUpdate(postId, {
            fullCode: fullCode,
        });
        return res.status(200).send({ message: "Post updated successfully" });
    }
    catch (error) {
        return res.status(500).send({ message: "Error editing code!", error });
    }
};
exports.editCode = editCode;
const getAllCodes = async (req, res) => {
    try {
        const allCodes = await CodeSchema_1.Code.find().sort({ createdAt: -1 });
        return res.status(200).send(allCodes);
    }
    catch (error) {
        return res.status(500).json({ message: "Error editing code!", error });
    }
};
exports.getAllCodes = getAllCodes;
