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
          <div className="flex h-full items-center justify-center p-6 bg-zinc-900">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default CodeEditor;
