import { useGetAllCodesQuery } from "@/app/features/api";
import CodeItem from "@/components/CodeItem";

const AllRepositories = () => {
  const { data: allRepositories } = useGetAllCodesQuery();
  console.log(allRepositories);
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3 p-3">
      {allRepositories?.length !== 0 ? (
        allRepositories?.map((codeItem) => {
          return (
            <CodeItem
              key={codeItem._id}
              data={codeItem}
              ownerName={codeItem.ownerName}
              deleteBtn={false}
            />
          );
        })
      ) : (
        <div className="text-center h-[calc(100vh-100px)] flex justify-center items-center text-slate-500 w-[95vw] sm:w-[98vw]">
          <p className="sm:text-2xl text-xl">
            There is not any saved repositories!
          </p>
        </div>
      )}
    </div>
  );
};

export default AllRepositories;
