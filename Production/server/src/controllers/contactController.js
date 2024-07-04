"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactUs = void 0;
const ContactSchema_1 = require("../models/ContactSchema");
const validator_1 = __importDefault(require("validator"));
const isValidEmail = (email) => {
    return validator_1.default.isEmail(email);
};
const ContactUs = async (req, res) => {
    try {
        const { userName, userEmail, userMessage } = req.body;
        if (!userName || !userEmail || !userMessage) {
            return res
                .status(400)
                .json({ message: "Username, email, and message are required fields." });
        }
        if (!isValidEmail(userEmail)) {
            return res.status(400).json({ message: "Invalid email address." });
        }
        await ContactSchema_1.Contact.create({ userName, userEmail, userMessage });
        return res.status(200).json({ message: "Message Sent Successfully :)" });
    }
    catch (error) {
        console.log("Error inside ContactUs: ", error);
        return res
            .status(500)
            .json({ message: "Message Not Delivered :(", error: error });
    }
};
exports.ContactUs = ContactUs;
