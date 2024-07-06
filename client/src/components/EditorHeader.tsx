import { FaCloud, FaCss3Alt, FaHtml5, FaRegEdit } from "react-icons/fa";
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

import { useNavigate, useParams } from "react-router-dom";

import { RiLoader2Line } from "react-icons/ri";
import { DialogShareButton } from "./CodeShareDialogueBtn";
import { useEditCodeMutation, useSaveCodeMutation } from "@/app/features/api";
import { toast } from "react-toastify";
import { MdDownload } from "react-icons/md";
import "../styles/buttonHover.css";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Code } from "lucide-react";
import { useEffect, useState } from "react";

const EditorHeader = () => {
  const isOwner = useSelector(
    (state: RootState) => state.codeEditorSlice.isOwner
  );
  const [postTitle, setPostTitle] = useState("My Code");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state: RootState) => state.codeEditorSlice.currentLanguage
  );
  const fullCode = useSelector(
    (state: RootState) => state.codeEditorSlice.fullCode
  );

  const [saveCode, { isLoading }] = useSaveCodeMutation();
  const [editCode] = useEditCodeMutation();
  const handleSaveCode = async () => {
    const body = { fullCode: fullCode, title: postTitle };
    try {
      const response = await saveCode(body).unwrap();
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

  const [shareBtn, setShareBtn] = useState(false);

  const { urlId } = useParams();
  useEffect(() => {
    if (urlId) {
      setShareBtn(true);
    } else {
      setShareBtn(false);
    }
  }, [urlId]);

  const handleEditCode = async () => {
    try {
      if (urlId) {
        await editCode({ fullCode, id: urlId }).unwrap();
        toast.success("Code Updated Successully :)");
      }
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <div className="sm:h-[50px] h-[100px] flex-wrap sm:flex-nowrap bg-zinc-900 text-white flex justify-between px-4 items-center">
      <div className="flex gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <button className="px-4 py-2 flex justify-center items-center bg-[#6a18b6] rounded-md hover:bg-[#5f09af] transition-all ease-in-out duration-300">
              <FaCloud
                id="icon"
                className="text-lg transition-all ease-in-out duration-300"
              />
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex gap-2 mb-4 justify-center items-center">
                <Code />
                Save your Code!
              </DialogTitle>
              <div className="__url flex justify-center items-center gap-1">
                <Input
                  className="bg-slate-700 focus-visible:ring-0"
                  placeholder="Type your Post title"
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                />
                <Button
                  variant="outline"
                  onClick={handleSaveCode}
                  className="px-4 py-2 gap-2 flex tex-sm justify-center items-center bg-[#6a18b6] rounded-md hover:bg-[#480785] transition-all ease-in-out duration-300"
                >
                  {isLoading ? (
                    <RiLoader2Line className="animate-spin" />
                  ) : (
                    <FaCloud
                      id="icon"
                      className="text-lg transition-all ease-in-out duration-300"
                    />
                  )}
                  Save
                </Button>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <button
          onClick={handleDownloadCode}
          className="px-4 py-2 flex justify-center items-center bg-[#0e9c55] rounded-md hover:bg-[#5f09af] transition-all ease-in-out duration-300"
        >
          <MdDownload
            id="icon"
            className="text-lg transition-all ease-in-out duration-300"
          />
        </button>

        {shareBtn && (
          <>
            {isOwner && (
              <button
                onClick={handleEditCode}
                className="px-4 py-2 flex justify-center items-center bg-[#8d0e78] rounded-md hover:bg-[#5f09af] transition-all ease-in-out duration-300"
              >
                <FaRegEdit
                  id="icon"
                  className="text-lg transition-all ease-in-out duration-300"
                />
              </button>
            )}
            <DialogShareButton />
          </>
        )}
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
