import { FaCloud, FaCss3Alt, FaHtml5, FaShare } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IoLogoJavascript } from "react-icons/io5";

const EditorHeader = () => {
  return (
    <div className="sm:h-[50px] h-[100px] flex-wrap sm:flex-nowrap bg-zinc-900 text-white flex justify-between px-4 items-center">
      <div className="flex gap-4">
        <button className="px-4 py-1 flex justify-center items-center gap-2 bg-green-600 rounded-md hover:bg-green-700 transition-all ease-in-out duration-300 hover:scale-105">
          <FaCloud />
          Save
        </button>
        <button className="px-4 py-1 flex justify-center items-center gap-2 bg-green-600 rounded-md hover:bg-green-700 transition-all ease-in-out duration-300 hover:scale-105">
          <FaShare />
          Share
        </button>
      </div>

      <div className="__tab_switcher flex justify-center items-center gap-1">
        <small className="text-[14px] text-zinc-400">Current Language: </small>
        <Select
          defaultValue="html"
        //   onValueChange={(value) =>
        //     dispatch(
        //       updateCurrentLanguage(
        //         value as CompilerSliceStateType["currentLanguage"]
        //       )
        //     )
        //   }
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
