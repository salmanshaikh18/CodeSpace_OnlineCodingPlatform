"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const cors_1 = __importDefault(require("cors"));
const dbConnect_1 = require("./lib/dbConnect");
const codeEditorRouter_1 = require("./routes/codeEditorRouter");
const userRouter_1 = require("./routes/userRouter");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const contactRouter_1 = require("./routes/contactRouter");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
(0, dotenv_1.config)();
const PORT = process.env.PORT;
// Middlewares
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({ credentials: true, origin: process.env.FRONTEND_URI }));
app.use((0, cors_1.default)({
    origin: [
        process.env.FRONTEND_URI || '',
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
}));
app.use("/code-editor", codeEditorRouter_1.codeEditorRouter);
app.use("/user", userRouter_1.userRouter);
app.use("/contact", contactRouter_1.contactRouter);
// app.get("/", (req: Request, res: Response) => {
//   return res.status(200).send("ok");
// });
// ------------- For Deployment -----------------------
app.use(express_1.default.static("client"));
app.use((req, res, next) => {
    res.sendFile(path_1.default.join(__dirname, "../client", "index.html"));
});
app.get("/", (req, res) => {
    app.use(express_1.default.static(path_1.default.resolve(__dirname, "../client", "index.html")));
    res.sendFile(path_1.default.resolve(__dirname, "client", "index.html"));
});
// ------------------------------------------------------
// Database Connection
(0, dbConnect_1.dbConnect)();
app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
});
