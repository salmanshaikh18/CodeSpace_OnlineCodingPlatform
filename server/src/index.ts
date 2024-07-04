import express, { Request, Response } from "express";
import { config } from "dotenv";
import cors from "cors";
import { dbConnect } from "./lib/dbConnect";
import { codeEditorRouter } from "./routes/codeEditorRouter";
import { userRouter } from "./routes/userRouter";
import cookieParser from "cookie-parser";
import { contactRouter } from "./routes/contactRouter";
import path from "path";

const app = express();
config();
const PORT = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: process.env.FRONTEND_URI }));
app.use(
  cors({
    origin: [
      process.env.FRONTEND_URI || '',
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
  })
);
app.use("/code-editor", codeEditorRouter);
app.use("/user", userRouter);
app.use("/contact", contactRouter);

// app.get("/", (req: Request, res: Response) => {
//   return res.status(200).send("ok");
// });

// ------------- For Deployment -----------------------

app.use(express.static("client"));
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "../client", "index.html"));
});

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "../client", "index.html")));
  res.sendFile(path.resolve(__dirname, "client", "index.html"));
});

// ------------------------------------------------------



// Database Connection
dbConnect();
app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});
