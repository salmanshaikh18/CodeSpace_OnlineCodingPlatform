import { CopyIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaShare } from "react-icons/fa";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function DialogCloseButton() {
  const [shareButton, setShareButton] = useState<boolean>(false);
  const { urlId } = useParams();

  useEffect(() => {
    if (urlId) {
      setShareButton(true);
    } else {
      setShareButton(false);
    }
  }, [urlId]);
  const handleCopy = () => {
    window.navigator.clipboard.writeText(window.location.href);
    toast.success("URL copid to your clipboard :)", {});
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* <Button variant="outline">Share</Button> */}
        {shareButton ? (
          <button className="px-4 py-1 flex justify-center items-center gap-2 bg-blue-800 rounded-md hover:bg-blue-900 transition-all ease-in-out duration-300 hover:scale-105">
            <FaShare />
            Share
          </button>
        ) : null}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md w-[90vw]">
        <DialogHeader>
          <DialogTitle>Code Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this code.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input id="link" defaultValue={window.location.href} readOnly />
          </div>
          <Button
            onClick={handleCopy}
            type="submit"
            size="sm"
            className="px-3 hover:bg-green-400 transition-all ease-in-out duration-300"
          >
            <span className="sr-only">Copy</span>
            <CopyIcon className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
