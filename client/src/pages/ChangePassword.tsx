import { RootState } from "@/app/store";
import { Button } from "@/components/ui/button";
import { handleError } from "@/utils/handleError";
import { MouseEvent, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const currentUser = useSelector(
    (state: RootState) => state.appSlice.currentUser
  );
  console.log("dfdf ", currentUser);
  const [isPasswordUpdate, setIsPasswordUpdate] = useState(false); // State to track if email is being sent
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  //   const { id, token } = useParams();

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("currentUser: ", currentUser);
    const isValidPassword = (password: string) => {
      // Example password validation - modify as needed
      return password.length >= 4; // Check if password is at least 6 characters long
    };

    try {
      if (password) {
        if (password !== confirmPassword) {
          toast.error(
            "Confirmed password doesn't match with the password you entered."
          );
          return;
        }
        if (!password || !isValidPassword(password)) {
          toast.error("Please enter a valid password (at least 4 characters).");
          return;
        }

        setIsPasswordUpdate(true); // Update state to indicate that email is being sent

        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URI}/user/change-password`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: currentUser.email,
              password: password,
            }),
          }
        );

        if (response.ok) {
          setPassword("");
          setConfirmPassword("");
          navigate(`/profile/${currentUser.username}`);
          toast.success("Your Password is Updated Successfully :)");
        } else {
          toast.error("Something went wrong!");
        }
      } else {
        toast.error("Please provide the password to update your password!");
      }
    } catch (error) {
      handleError(error);
      console.log("Error while updating a password: ", error);
    }
  };
  return (
    <div className="__right flex flex-col justify-center w-full h-[80vh] items-center gap-4 my-10">
      <h1 className="text-[#03CF86] text-center w-full sm:w-[30%] mb-4 font-normal text-2xl sm:text-3xl">
        Change Password
      </h1>
      <input
        className="p-2 w-[90%] sm:w-[400px] border outline-none border-[#03CF86a] rounded-md bg-[#171F38]"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Your New Password"
      />
      <input
        className="p-2 w-[90%] sm:w-[400px] border outline-none border-[#03CF86a] rounded-md bg-[#171F38]"
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Your New Password"
      />
      <Button
        className="w-[90%] sm:w-[400px] bg-blue-800 transition-all ease-in-out duration-500 hover:bg-blue-900"
        variant={"secondary"}
        onClick={handleSubmit}
      >
        {isPasswordUpdate ? "Updating Password..." : "Update Password"}
      </Button>
    </div>
  );
};

export default ChangePassword;
