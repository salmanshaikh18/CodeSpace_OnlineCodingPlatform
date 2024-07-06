import { RootState } from "@/app/store";
import CodeEditor from "@/components/CodePlayground/CodeEditor";
import PleaseLogin from "@/components/PleaseLogin";
// import { RootState } from "@reduxjs/toolkit/query"
import { useSelector } from "react-redux";

const CodePlayground = () => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.appSlice.isLoggedIn
  );
  return (
    <>
      {isLoggedIn ? (
        <div className="h-[calc(100vh-60xp)]">
          <div className="h-[90%] text-gray-500 px-4 md:px-6 py-8">
            <CodeEditor />
          </div>
        </div>
      ) : (
        <PleaseLogin feature="CodePlayground" />
      )}
    </>
  );
};

export default CodePlayground;
