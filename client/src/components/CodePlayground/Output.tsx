import React, { useState } from "react";
import { Button, Text, useToast } from "@chakra-ui/react";
import { executeCode } from "./api";

interface OutputProps {
  editorRef: React.MutableRefObject<any>;
  language: string;
}

const Output: React.FC<OutputProps> = ({ editorRef, language }) => {
  const toast = useToast();
  const [output, setOutput] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [isError, setIsError] = useState<boolean>(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      // result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        toast({
          title: "An error occurred.",
          description: error.message || "Unable to run code",
          status: "error",
          duration: 6000,
        });
      } else {
        toast({
          title: "An error occurred.",
          description: "Unable to run code",
          status: "error",
          duration: 6000,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-[40vw]">
     <div className="flex gap-2 justify-start mb-4 items-center">
     <h1 className="text-lg font-medium text-zinc-400">
        Output:
      </h1>
      <Button
        variant="outline"
        colorScheme="green"
        className="bg-transparent px-2 py-1 transition-all ease-in-out duration-300 font-bold text-lg cursor-pointer hover:bg-zinc-100 text-[#03CF7E] border-[1px] border-[#03CF7E] rounded-lg"
        isLoading={isLoading}
        onClick={runCode}
      >
        Run Code
      </Button>
     </div>
      <div
        className="overflow-auto p-4 border-[1px] h-[70vh] border-zinc-200 rounded-md"
        // color={isError ? "red.400" : ""}
        // borderColor={isError ? "red.500" : "#333"}
      >
        {output
          ? output.map((line, i) => <Text key={i}>{line}</Text>)
          : 'Click "Run Code" to see the output here'}
      </div>
    </div>
  );
};
export default Output;
