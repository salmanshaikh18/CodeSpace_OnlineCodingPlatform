import express, { Request, Response } from "express";
import { config } from "dotenv";
import cors from "cors";
import { dbConnect } from "./lib/dbConnect";
import { codeEditorRouter } from "./routes/codeEditorRouter";
import { userRouter } from "./routes/userRouter";

const app = express();
config();
const PORT = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  return res.status(200).send("ok");
});

app.use("/code-editor", codeEditorRouter)
app.use("/user", userRouter)

// Database Connection
dbConnect()
app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});
