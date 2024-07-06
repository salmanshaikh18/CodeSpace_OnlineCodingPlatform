import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";

interface LanguageSelectorProps {
  language: string;
  onSelect: (language: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onSelect }) => {
  const [language, setLanguage] = useState("javascript");
  return (
    <div className="mb-4 flex justify-start items-center gap-2">
      <small className="text-lg text-zinc-400 font-medium">Language: </small>

      <Select
        defaultValue={language}
        onValueChange={(value) => {
          setLanguage(value);
          onSelect(value);
        }}
      >
        <SelectTrigger className="w-[140px] h-[40px] p-4 bg-gray-800 text-zinc-200 font-medium outline-none focus:ring-0">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem
            className="cursor-pointer text-zinc-300 font-medium hover:text-blue-500 transition-all ease-in-out duration-300"
            value="javascript"
          >
            <div className="flex justify-center  items-center gap-2">
              <IoLogoJavascript className="text-[#F4C60F] text-lg" />
              <p>JavaScript</p>
            </div>
          </SelectItem>
          <SelectItem className="cursor-pointer" value="python">
            <div className="flex justify-center font-medium items-center gap-2">
              <FaPython className="text-[#3672A4] text-lg" />
              <p>Python</p>
            </div>
          </SelectItem>
          <SelectItem className="cursor-pointer" value="java">
            <div className="flex justify-center items-center font-medium gap-2">
              <FaJava className="text-[#4F7B9C] text-lg" />
              <p>Java</p>
            </div>
          </SelectItem>
          <SelectItem className="cursor-pointer" value="csharp">
            <div className="flex justify-center font-medium items-center gap-2">
              <SiCsharp className="text-[#B24494] text-lg" />
              <p>CSharp</p>
            </div>
          </SelectItem>
          <SelectItem className="cursor-pointer" value="php">
            <div className="flex justify-center font-medium items-center gap-2">
              <FaPhp className="text-[#757AB2] text-lg" />
              <p>PHP</p>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
