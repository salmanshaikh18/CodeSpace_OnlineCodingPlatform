"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ContactSchema = new mongoose_1.default.Schema({
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
exports.Contact = mongoose_1.default.model("Contact", ContactSchema);
