import { CodeEditorSliceStateType } from "@/app/features/codeEditorSlice";
import { Code } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { codeType } from "@/vite-env";
import { Link } from "react-router-dom";

const CodeItem = ({ data }: { data: codeType }) => {
  return (
    <div className="p-3 flex flex-col justify-start items-center gap-3 rounded bg-slate-800">
      <div className="flex justify-center items-center gap-3 w-full">
        <Code />
        <p className="font-medium text-lg">{data.title}</p>
        <p>{}</p>
      </div>
      <Separator />
      <Link target="_blank" to={`/code-editor/${data._id}`} className="w-full">
        <button className="bg-blue-800 hover:bg-blue-900 transition-all ease-in-out duration-300 p-2 w-full rounded-md cursor-pointer">
          Open Code
        </button>
      </Link>

      <button className="bg-red-800 hover:bg-red-900 transition-all ease-in-out duration-300 p-2 w-full rounded-md cursor-pointer">
        Delete Code
      </button>
    </div>
  );
};

export default CodeItem;
