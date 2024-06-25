import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { tags as t } from "@lezer/highlight";
import { draculaInit } from "@uiw/codemirror-theme-dracula";
import {
  loadLanguage,
  langNames,
  langs,
} from "@uiw/codemirror-extensions-langs";
import React from "react";

const Editor = () => {
  loadLanguage("tsx");

  langs.tsx();

  console.log("langNames:", langNames); // => "jsx" | "typescript" | "javascript" | "tsx"
  const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val: any) => {
    console.log("val:", val);
    setValue(val);
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
        value={value}
        className="h-[calc(100vh-60px-50px)]"
        height="100%"
        extensions={[loadLanguage('javascript')!]}
        onChange={onChange}
      />
    </div>
  );
};

export default Editor;
