import ReactCodeMirror from "@uiw/react-codemirror";
// import { javascript } from "@codemirror/lang-javascript";
import { tags as t } from "@lezer/highlight";
import { draculaInit } from "@uiw/codemirror-theme-dracula";
import {
  loadLanguage,
  // langNames,
  // langs,
} from "@uiw/codemirror-extensions-langs";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { updateCodeValue } from "@/app/features/codeEditorSlice";
import { Editor } from "@monaco-editor/react";

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
            enabled: false,
          },
          // fontSize: 16,
          wordWrap: "on",
        }}
        theme="vs-dark"
        language={currentLanguage}
        className="code-editor outline-none text-sm sm:text-[18px] focus:ring-0 border-none "
        value={fullCode[currentLanguage]}
        onChange={() => onChange}
      />
    </div>
  );
};

export default MonacoEditor;
