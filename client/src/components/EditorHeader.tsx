import { FaCloud, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IoLogoJavascript } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  CodeEditorSliceStateType,
  updateCurrentLanguage,
} from "@/app/features/codeEditorSlice";
import { RootState } from "@/app/store";
import { handleError } from "@/utils/handleError";

import { useNavigate } from "react-router-dom";

import { RiLoader4Line } from "react-icons/ri";
import { DialogCloseButton } from "./CodeShareDialogueBtn";
import { useSaveCodeMutation } from "@/app/features/api";
import { toast } from "react-toastify";
import { MdDownload } from "react-icons/md";

const EditorHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state: RootState) => state.codeEditorSlice.currentLanguage
  );
  const fullCode = useSelector(
    (state: RootState) => state.codeEditorSlice.fullCode
  );

  const [saveCode, { isLoading }] = useSaveCodeMutation();
  const handleSaveCode = async () => {
    try {
      const response = await saveCode(fullCode).unwrap();
      console.log(response);
      navigate(`/code-editor/${response.url}`, { replace: true });
      toast.success("Code saved successfully :)");
    } catch (error) {
      handleError(error);
    }
  };

  const handleDownloadCode = () => {
    if (
      fullCode.html === "" &&
      fullCode.css === "" &&
      fullCode.javascript === ""
    ) {
      toast.error("Error: Code is Empty");
    } else {
      const htmlCode = new Blob([fullCode.html], { type: "text/html" });
      const cssCode = new Blob([fullCode.css], { type: "text/css" });
      const javascriptCode = new Blob([fullCode.javascript], {
        type: "text/javascript",
      });

      const htmlLink = document.createElement("a");
      const cssLink = document.createElement("a");
      const javascriptLink = document.createElement("a");

      htmlLink.href = URL.createObjectURL(htmlCode);
      htmlLink.download = "index.html";
      document.body.appendChild(htmlLink);

      cssLink.href = URL.createObjectURL(cssCode);
      cssLink.download = "style.css";
      document.body.appendChild(cssLink);

      javascriptLink.href = URL.createObjectURL(javascriptCode);
      javascriptLink.download = "script.js";
      document.body.appendChild(javascriptLink);

      if (fullCode.html !== "") {
        htmlLink.click();
      }
      if (fullCode.css !== "") {
        cssLink.click();
      }
      if (fullCode.javascript !== "") {
        javascriptLink.click();
      }

      document.body.removeChild(htmlLink);
      document.body.removeChild(cssLink);
      document.body.removeChild(javascriptLink);

      toast.success("Code Downloaded Successfully!");
    }
  };
  return (
    <div className="sm:h-[50px] h-[100px] flex-wrap sm:flex-nowrap bg-zinc-900 text-white flex justify-between px-4 items-center">
      <div className="flex gap-4">
        <button
          onClick={handleSaveCode}
          disabled={isLoading}
          className="px-4 py-1 flex justify-center items-center gap-2 bg-green-600 rounded-md hover:bg-green-700 transition-all ease-in-out duration-300 hover:scale-105"
        >
          {isLoading ? (
            <>
              <RiLoader4Line className="animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <FaCloud />
              Save
            </>
          )}
        </button>
        <button onClick={handleDownloadCode} className="px-4 py-1 flex justify-center items-center gap-2 bg-[#6a18b6] rounded-md hover:bg-[#5f09af] transition-all ease-in-out duration-300 hover:scale-105">
          <MdDownload />
          Download
        </button>
        <DialogCloseButton />
      </div>

      <div className="__tab_switcher flex justify-center items-center gap-1">
        <small className="text-[14px] text-zinc-400">Current Language: </small>
        <Select
          defaultValue={currentLanguage}
          onValueChange={(value) =>
            dispatch(
              updateCurrentLanguage(
                value as CodeEditorSliceStateType["currentLanguage"]
              )
            )
          }
        >
          <SelectTrigger className="w-[130px] bg-gray-800 outline-none focus:ring-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="">
            <SelectItem className="cursor-pointer" value="html">
              <div className="flex justify-center items-center gap-2">
                <FaHtml5 className="text-[#EF6428] text-lg" />
                <p>HTML</p>
              </div>
            </SelectItem>
            <SelectItem className="cursor-pointer" value="css">
              <div className="flex justify-center items-center gap-2">
                <FaCss3Alt className="text-[#275EEC] text-lg" />
                <p>CSS</p>
              </div>
            </SelectItem>
            <SelectItem className="cursor-pointer" value="javascript">
              <div className="flex justify-center items-center gap-2">
                <IoLogoJavascript className="text-[#F4C60F] text-lg" />
                <p>JavaScript</p>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default EditorHeader;
