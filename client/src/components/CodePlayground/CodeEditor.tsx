import React, { useRef, useState } from "react";
import { Editor, OnMount } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "./constants";
import Output from "./Output";

const CodeEditor: React.FC = () => {
  const editorRef = useRef<any>(null); // Use any type for editorRef

  // Maintain code for each language separately
  const [codeByLanguage, setCodeByLanguage] = useState<{ [key: string]: string }>({
    javascript: CODE_SNIPPETS.javascript,
    typescript: CODE_SNIPPETS.typescript,
    java: CODE_SNIPPETS.java,
    php: CODE_SNIPPETS.php,
    csharp: CODE_SNIPPETS.csharp,
    python: CODE_SNIPPETS.python,
  });
  const [language, setLanguage] = useState<string>("javascript");

  const onMount: OnMount = (editor) => {
    editorRef.current = editor;
    if (editor && typeof editor.focus === "function") {
      editor.focus();
    }
  };

  const onSelect = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
    // Check if the code for the selected language is already set
    // If not, set it to the default code snippet
    if (!codeByLanguage[selectedLanguage]) {
      setCodeByLanguage(prevCodeByLanguage => ({
        ...prevCodeByLanguage,
        [selectedLanguage]: CODE_SNIPPETS[selectedLanguage],
      }));
    }
  };

  const onEditorChange = (newValue: string | undefined) => {
    // Update code for the current language
    setCodeByLanguage(prevCodeByLanguage => ({
      ...prevCodeByLanguage,
      [language]: newValue ?? "",
    }));
  };

  return (
    <div className="flex gap-4">
      {/* <HStack spacing={4}> */}
        <div className="w-[60vw]">
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
              fontSize: 16,
              wordWrap: "on"
            }}
            height="70vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={codeByLanguage[language]} // Use code for the current language
            onChange={onEditorChange}
          />
        </div>
        <Output editorRef={editorRef} language={language} />
      {/* </HStack> */}
    </div>
  );
};

export default CodeEditor;
