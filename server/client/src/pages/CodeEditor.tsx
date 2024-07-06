import { updateFullCode, updateIsOwner } from "@/app/features/codeEditorSlice";
import CodePreview from "@/components/CodePreview";
// import Editor from "@/components/MonacoEditor";
import EditorHeader from "@/components/EditorHeader";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { handleError } from "@/utils/handleError";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import MonacoEditor from "@/components/MonacoEditor";
import { useLoadCodeMutation } from "@/app/features/api";
import Loader from "../components/Loader/Loader";

const CodeEditor = () => {
  const { urlId } = useParams();
  const [loadExistingCode, { isLoading }] = useLoadCodeMutation();
  const dispatch = useDispatch();
  const loadCode = async () => {
    try {
      if (urlId) {
        const response = await loadExistingCode({ urlId }).unwrap();
        dispatch(updateFullCode(response.fullCode));
        dispatch(updateIsOwner(response.isOwner));
      }
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    if (urlId) {
      loadCode();
    }
  }, [urlId]);

  if (isLoading)
    return (
      <>
        <Loader />
      </>
    );
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
