import { Code } from "lucide-react";
import { Separator } from "./ui/separator";
import { codeType } from "@/vite-env";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useDeleteCodeMutation } from "@/app/features/api";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { handleError } from "@/utils/handleError";
import { RiLoader2Line } from "react-icons/ri";

const CodeItem = ({
  data,
  deleteBtn,
  ownerName, // New prop for owner name
}: {
  data: codeType;
  deleteBtn: boolean;
  ownerName: string; // New prop type for owner name
}) => {
  const [deleteCode, { isLoading }] = useDeleteCodeMutation();
  const handleDeleteRepository = async () => {
    try {
      const response = await deleteCode(data._id!).unwrap();
      console.log(response);
      toast.success("Code Deleted Successfully!");
    } catch (error) {
      handleError(error);
    }
  };
  return (
    <div className="p-3 flex flex-col justify-start items-center gap-3 rounded bg-slate-800">
      <div className="flex justify-center items-center gap-3 w-full">
        <Code />
        <p className="font-medium text-lg">{data.title}</p>
      </div>
      {ownerName && (
        <p className="text-md text-zinc-400">
          Created by <span className="text-[#03CF86]">{ownerName}</span>
        </p>
      )}{" "}
      <Separator />
      <Link target="_blank" to={`/code-editor/${data._id}`} className="w-full">
        <button className="bg-blue-800 hover:bg-blue-900 transition-all ease-in-out duration-300 p-2 w-full rounded-md cursor-pointer">
          Open Code
        </button>
      </Link>
      <Dialog>
        <DialogTrigger asChild>
          {deleteBtn && (
            <button className="bg-red-800 hover:bg-red-900 transition-all ease-in-out duration-300 p-2 w-full rounded-md cursor-pointer">
              Delete Code
            </button>
          )}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex gap-2 mb-4 justify-center items-center">
              <Code />
              Delete your Code!
            </DialogTitle>
            <div className="__url flex flex-col justify-center items-center gap-4">
              <p>
                Are your sure, that you want to delete this code repository?
              </p>
              <button
                onClick={handleDeleteRepository}
                className="bg-red-800 hover:bg-red-900 transition-all ease-in-out duration-300 p-2  rounded-md cursor-pointer flex gap-2 justify-center items-center"
              >
                {isLoading ? (
                  <RiLoader2Line className="animate-spin" />
                ) : (
                  <MdDelete />
                )}
                Delete
              </button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CodeItem;
