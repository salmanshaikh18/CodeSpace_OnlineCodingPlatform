import { Code, Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
// import { codeType } from "@/vite-env";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const CodeItem = () => {
  return (
    <div className="p-3 rounded-lg cursor-pointer bg-slate-900 w-[19vw] flex flex-wrap justify-start items-center flex-col gap-5">
      <div className="__top flex flex-col flex-wrap justify-start items-center gap-2 w-full">
        <div className="flex justify-center items-center gap-2">
          <Code />
          {/* <p className="font-bold text-lg">{data.title}</p> */}
        </div>
        {/* {ownerName && ( */}
          <p className="text-md text-zinc-400">
            {/* Created by <span className="text-[#03CF86]">{ownerName}</span> */}
          </p>
        {/* )}{" "} */}
        {/* Display owner name */}
      </div>
      <Separator />
      <div className="__btn_container flex flex-col justify-center items-center gap-3">
        {/* <Link target="_blank" to={`/code-editor/${data._id}`}> */}
          <button className="cssbuttons-io rounded-md">
            <span>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                  fill="currentColor"
                ></path>
              </svg>
              Open Repository
            </span>
          </button>
        </Link>
        {/* {deleteBtn && ( */}
          <Dialog>
            <DialogTrigger asChild>
              {/* <Button variant="destructive" loading={false}>
                Delete
              </Button> */}
              <button id="deleteBtn" className="noselect mt-1">
                <span className="text">Delete Repository</span>
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                  </svg>
                </span>
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="flex gap-1 justify-center items-center">
                  <Trash2 />
                  Delete Code confirmation!
                </DialogTitle>
                <div className="__url flex justify-center items-center flex-col gap-1">
                  <p>
                    Are you sure, that you want to delete this code, this action
                    is not reversible.
                  </p>
                  <Button
                    variant="destructive"
                    className="h-full"
                    // onClick={handleDelete}
                    // loading={isLoading}
                  >
                    Confirm Delete
                  </Button>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  )
}

export default CodeItem