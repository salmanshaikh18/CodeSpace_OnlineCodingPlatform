import mongoose from "mongoose";

interface ICodeScema {
  fullCode: {
    html: string;
    css: string;
    javascript: string;
  };
}

const CodeSchema = new mongoose.Schema<ICodeScema>({
  fullCode: {
    html: String,
    css: String,
    javascript: String,
  },
});

export const Code = mongoose.model("Code", CodeSchema)