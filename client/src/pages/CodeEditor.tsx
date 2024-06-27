import CodePreview from "@/components/CodePreview";
import Editor from "@/components/Editor";
import EditorHeader from "@/components/EditorHeader";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const CodeEditor = () => {
  return (
    <div className="text-red-500 h-[calc(100vh-60px-50px)] w-full">
      <EditorHeader />
      <ResizablePanelGroup
        direction="vertical"
        className="min-h-[full] max-w-full border"
      >
        <ResizablePanel defaultSize={75}>
          <Editor />
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
