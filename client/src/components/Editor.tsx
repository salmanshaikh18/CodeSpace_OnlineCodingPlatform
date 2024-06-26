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

const Editor = () => {
  const currentLanguage = useSelector(
    (state: RootState) => state.codeEditorSlice.currentLanguage
  );

  const dispatch = useDispatch();

  const fullCode = useSelector(
    (state: RootState) => state.codeEditorSlice.fullCode
  );

  // const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((value: string) => {
    dispatch(updateCodeValue(value));
  }, []);
  return (
    <div className="h-[calc(100vh-60px-50px)]">
      <ReactCodeMirror
        theme={draculaInit({
          settings: {
            caret: "#c6c6c6",
            fontFamily: "monospace",
          },
          styles: [{ tag: t.comment, color: "#6272a4" }],
        })}
        value={fullCode[currentLanguage]}
        className="h-[100vh]"
        height="100%"
        extensions={[loadLanguage(currentLanguage)!]}
        onChange={onChange}
      />
    </div>
  );
};

export default Editor;
