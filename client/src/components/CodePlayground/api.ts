import axios, { AxiosInstance } from "axios";
import { LANGUAGE_VERSIONS } from "./constants";

const API: AxiosInstance = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

interface ExecuteCodeResponse {
  run: {
    output: string;
    stderr?: string;
  };
}

export const executeCode = async (
  language: string,
  sourceCode: string
): Promise<ExecuteCodeResponse> => {
  const response = await API.post("/execute", {
    language: language,
    version: LANGUAGE_VERSIONS[language],
    files: [
      {
        content: sourceCode,
      },
    ],
  });
  return response.data;
};
