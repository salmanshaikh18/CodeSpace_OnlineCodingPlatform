import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
// import { useLoginMutation } from "@/redux/slices/api";
// import { handleError } from "@/utils/handleError";
import { useDispatch } from "react-redux";
// import { updateCurrentUser, updateIsLoggedIn } from "@/redux/slices/appSlice";
// import toast from "react-hot-toast";
import {toast} from "react-toastify";

const formSchema = z.object({
  userId: z.string(),
  password: z.string(),
});

export default function Login() {
//   const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: "",
      password: "",
    },
  });

  async function handleLogin(values: z.infer<typeof formSchema>) {
    try {
    //   const response = await login(values).unwrap();
    //   dispatch(updateCurrentUser(response));
    //   dispatch(updateIsLoggedIn(true));
      navigate("/");
      toast.success("Success! You're now logged in and ready to explore. :)");
    } catch (error) {
    //   handleError(error);
    }
  }

  return (
    <div className="_login bg-no-repeat bg-center bg-cover bg-[url(https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] w-full h-[calc(100vh-60px)] flex justify-center items-center flex-col gap-2">
      <div className="__formContainer shadow-[0_0_15px_gray] absolute sm:left-[120px] sm:min-w-[350px] p-8 rounded-lg bg-transparent">
        {" "}
        <div className="mb-6 flex justify-center flex-col items-center">
          <h1 className="text-center text-4xl text-blue-700 font-semibold">
            Login
          </h1>
          <p className="text-blue-800 text-lg">Welcome back to The CodeSpace</p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleLogin)}
            className="flex flex-col gap-2"
          >
            <FormField
              control={form.control}
              name="userId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-green-500">Username</FormLabel>
                  <FormControl>
                    <Input
                      required
                      // type="text"
                    //   disabled={isLoading}
                      placeholder="Username or Email"
                      className="rounded-md p-2 border outline-none border-[#03CF86a] text-zinc-200 pl-4 max-h-40 w-full bg-[#171F38]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-green-500">Password</FormLabel>
                  <FormControl>
                    <Input
                      required
                    //   disabled={isLoading}
                      type="password"
                      placeholder="Password"
                      className="rounded-md p-2 border outline-none border-[#03CF86a] text-zinc-200 pl-4 max-h-40 w-full bg-[#171F38]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <br /> */}
            <div>
              <small className="flex text-zinc-400  justify-end items-center my-2">
                {/* Forgot Password?&nbsp;{" "} */}
                <Link
                  to="/forgot-password"
                  className="text-blue-500 transition-all ease-in-out duration-300 hover:text-blue-700 text-md hover:underline font-semibold"
                >
                  {" "}
                  Forgot Password?
                </Link>
              </small>
            </div>
            <Button
            //   loading={isLoading}
            //   disabled={isLoading}
              className="w-full gap-1 bg-blue-700 hover:bg-blue-900 transition-all ease-in-out duration-300"
              variant={"secondary"}
              type="submit"
            >
              Login
            </Button>
          </form>
        </Form>
        <div>
          <small className="flex text-zinc-400 text-md justify-center items-center mt-5">
            Don't have an account?&nbsp;{" "}
            <Link
              to="/user/register"
              className="text-blue-500 text-md hover:underline font-semibold"
            >
              {" "}
              Signup
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}
