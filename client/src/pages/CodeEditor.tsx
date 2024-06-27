import { updateFullCode } from "@/app/features/codeEditorSlice";
import CodePreview from "@/components/CodePreview";
// import Editor from "@/components/MonacoEditor";
import EditorHeader from "@/components/EditorHeader";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { handleError } from "@/utils/handleErrors";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import MonacoEditor from "@/components/MonacoEditor";

const CodeEditor = () => {
  const { urlId } = useParams();
  const dispatch = useDispatch()
  const loadCode = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URI}/code-editor/load`, {
        urlId: urlId,
      })
      dispatch(updateFullCode(response.data.loadedCode))
      console.log(response.data)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error?.response?.status === 500) {
          toast.error("Invalid URL, Default Code is loaded")
        }
      }
      handleError(error)
    }
  }

  useEffect(() => {
    if (urlId) {
      loadCode()
    }
  }, [urlId])
  return (
    <div className="text-red-500 h-[calc(100vh-60px-50px)] w-full">
      <EditorHeader />
      <ResizablePanelGroup
        direction="vertical"
        className="min-h-[full] max-w-full border"
      >
        <ResizablePanel defaultSize={75}>
          <MonacoEditor />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={25}>
          <CodePreview />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default CodeEditor;
