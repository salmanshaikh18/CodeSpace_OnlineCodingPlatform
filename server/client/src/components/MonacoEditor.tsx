import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { updateCodeValue } from "@/app/features/codeEditorSlice";
import { Editor } from "@monaco-editor/react";
import Loader from "./Loader/Loader";

const MonacoEditor = () => {
  const currentLanguage = useSelector(
    (state: RootState) => state.codeEditorSlice.currentLanguage
  );

  const dispatch = useDispatch();

  const fullCode = useSelector(
    (state: RootState) => state.codeEditorSlice.fullCode
  );

  const onChange = React.useCallback((value: string) => {
    dispatch(updateCodeValue(value));
  }, []);
  return (
    <div className="h-full w-full">
      {/* <ReactCodeMirror
        theme={draculaInit({
          settings: {
            caret: "#c6c6c6",
            fontFamily: "monospace",
          },
          styles: [{ tag: t.comment, color: "#6272a4" }],
        })}
        value={fullCode[currentLanguage]}
        className="h-full w-full"
        height="100%"
        extensions={[loadLanguage(currentLanguage)!]}
        onChange={onChange}
      /> */}
      <Editor
        options={{
          minimap: {
            enabled: true,
          },
          fontSize: 14,
          wordWrap: "on",
        }}
        theme="vs-dark"
        language={currentLanguage}
        className="code-editor text-blue-500 outline-none text-sm focus:ring-0 border-none "
        value={fullCode[currentLanguage] ?? ""}
        // onChange={onChange}
        onChange={(value) => {
          if (typeof value === "string") {
            onChange(value);
          }
        }}
        loading={<Loader />} // Remove the default loading message
      />
    </div>
  );
};

export default MonacoEditor;
