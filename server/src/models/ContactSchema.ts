import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    userMessage: {
        type: String,
        required: true,
    }
}, { timestamps: true });


// define the model or collection name
export const Contact = mongoose.model("Contact", ContactSchema) 