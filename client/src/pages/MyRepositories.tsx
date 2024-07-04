import { useGetMyCodesQuery } from "@/app/features/api";
import CodeItem from "@/components/CodeItem";
import { Link } from "react-router-dom";

export default function MyRepositories() {
  const { data: myRepositories } = useGetMyCodesQuery();

  return myRepositories?.length !== 0 ? (
    <div className="p-3 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3">
      {myRepositories?.map((item) => {
        return (
          <CodeItem
            ownerName={""}
            deleteBtn={true}
            key={item._id}
            data={item}
          />
        );
      })}
    </div>
  ) : (
    <div className="text-center h-[calc(100vh-60px)] text-2xl flex justify-center items-center text-slate-500 p-3">
      <p>
        You don't have any saved codes.&nbsp;
        <Link
          to="/code-editor"
          className="text-blue-600 transition-all ease-in-out duration-300 text-2xl hover:underline hover:text-blue-800"
        >
          Create One
        </Link>
      </p>
    </div>
  );
}
