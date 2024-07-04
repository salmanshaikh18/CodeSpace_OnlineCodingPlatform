import { useGetMyCodesQuery } from "@/app/features/api";
import CodeItem from "@/components/CodeItem";
// import { useGetMyCodesQuery } from "@/redux/slices/api";
import { Link } from "react-router-dom";

export default function MyRepositories() {
  const { data: myRepositories } = useGetMyCodesQuery();

  return myRepositories?.length !== 0 ? (
    <div className="p-3 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3">
      {myRepositories?.map((item) => {
        return <CodeItem ownerName={""} deleteBtn={true} key={item._id} data={item} />;
      })}
    </div>
  ) : (
    <>
      <p className="text-center font-mono text-slate-600 p-3">
        You don't have any saved codes. <Link to="/compiler">Create One</Link>
      </p>
    </>
  );
}
