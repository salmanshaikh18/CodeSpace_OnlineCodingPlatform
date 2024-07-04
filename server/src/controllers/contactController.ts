import { Request, Response } from "express";
import { Contact } from "../models/ContactSchema";
import validator from "validator";

const isValidEmail = (email: string): boolean => {
  return validator.isEmail(email);
};

export const ContactUs = async (req: Request, res: Response) => {
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

    await Contact.create({ userName, userEmail, userMessage });

    return res.status(200).json({ message: "Message Sent Successfully :)" });
  } catch (error) {
    console.log("Error inside ContactUs: ", error);
    return res
      .status(500)
      .json({ message: "Message Not Delivered :(", error: error });
  }
};
