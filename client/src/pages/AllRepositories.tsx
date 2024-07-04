// import CodeItem from "@/components/CodeItem";
// import { useGetAllCodesQuery } from "@/redux/slices/api";
// import { RootState } from "@/redux/store";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
// import IsLoggedIn from "@/components/IsLoggedIn";

export default function AllRepositories() {
//   const { data: allCodes} = useGetAllCodesQuery();

  const isLoggedIn = useSelector(
    (state: RootState) => state.appSlice.isLoggedIn
  );

  
  return (
    <>
      {isLoggedIn ? (
        allCodes?.length !== 0 ? (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3 p-3">
            {allCodes?.map((codeItem) => {
              return (
                <CodeItem
                  deleteBtn={false}
                  key={codeItem._id}
                  data={codeItem}
                  ownerName={codeItem.ownerName} // Pass owner name
                />
              );
            })}
          </div>
        ) : (
          <p className="block w-full text-slate-500 font-mono text-center p-3">
            No Codes Found!
          </p>
        )
      ) : (
        // <IsLoggedIn feature={"AllCodes"} />
      )}
    </>
  );
}
