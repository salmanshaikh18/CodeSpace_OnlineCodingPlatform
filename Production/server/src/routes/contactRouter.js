"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactRouter = void 0;
const express_1 = __importDefault(require("express"));
const contactController_1 = require("../controllers/contactController");
exports.contactRouter = express_1.default.Router();
exports.contactRouter.post("/message", contactController_1.ContactUs);
