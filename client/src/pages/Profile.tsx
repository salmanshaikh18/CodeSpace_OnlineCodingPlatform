import { useLogoutMutation } from "@/app/features/api";
import { updateCurrentUser, updateIsLoggedIn } from "@/app/features/appSlice";
import { updateIsOwner } from "@/app/features/codeEditorSlice";
import { RootState } from "@/app/store";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { handleError } from "@/utils/handleError";
import { RiLoader2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {
  const [logout, { isLoading }] = useLogoutMutation();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      const response = await logout().unwrap();
      dispatch(updateIsLoggedIn(false));
      dispatch(updateCurrentUser({}));
      dispatch(updateIsOwner(false))
      toast.success(response.message)
      navigate("/")
    } catch (error) {
      handleError(error);
    }
  };
  const currentUser = useSelector(
    (state: RootState) => state.appSlice.currentUser
  );
  return (
    <div className="h-[calc(100vh-60px)] w-full flex justify-center items-center ">
      <div className="card h-[450px] sm:h-[380px] w-[80vw] sm:w-[500px] shadow-[0_0_15px_gray] bg-slate-900 rounded-lg">
        <div className="tools h-10 flex gap-1 items-center pl-3">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        {currentUser.username ? (
          <div className="card__content h-[390px] sm:h-[300px] flex flex-col justify-center items-center gap-2 text-lg sm:text-2xl p-4 text-zinc-300 font-semibold">
            <h1 className="my-2 sm:text-3xl text-xl text-zinc-300 mb-4">My Profile</h1>
            <Avatar className="border-2 border-blue-500 h-20 w-20 mb-4">
              <AvatarImage src={currentUser.picture} />
              <AvatarFallback className="capitalize">
                {currentUser.username?.slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <h1 className="text-blue-500">
              UserName : &nbsp;
              <span className="text-green-500">{currentUser.username}</span>
            </h1>
            <h1 className="text-blue-500">
              Email : &nbsp;
              <span className="text-green-500">{currentUser.email}</span>
            </h1>
            <div className="text-[16px] flex-col sm:flex-row flex justify-between items-center gap-4 sm:gap-8 my-4 sm:mt-8 mt-4">
              <Button
                // loading={isLoading}
                onClick={handleLogout}
                // className="mr-2 bg-slate-500 hover:bg-slate-500 font-semibold text-zinc-200"
                className="font-medium text-[16px] w-[150px] bg-red-800 transition-all ease-in-out duration-500 sm:px-4 sm:py-5 px-2 py-1 gap-2"
                variant="destructive"
              >
                {isLoading && <RiLoader2Line className="animate-spin" />}
                Log Out
              </Button>
              <button
                onClick={() => navigate(`change-password`)}
                className="bg-slate-700 w-[150px] sm:px-2 sm:py-1 rounded-md font-medium hover:bg-slate-800 transition-all ease-in-out duration-300 px-2 py-1"
              >
                Change Password
              </button>
            </div>
          </div>
        ) : (
          <h1 className="text-center text-2xl font-semibold text-red-500">
            Please Login to view your profile
          </h1>
        )}
      </div>
    </div>
  );
};

export default Profile;
