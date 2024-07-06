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
// import { handleError } from "@/utils/handleError";
// import { useSignupMutation } from "@/redux/slices/api";
import { useDispatch } from "react-redux";
// import { updateCurrentUser, updateIsLoggedIn } from "@/redux/slices/appSlice";
// import toast from "react-hot-toast";
import { toast } from "react-toastify";
import { handleError } from "@/utils/handleError";
import { useRegisterMutation } from "@/app/features/api";
import { updateCurrentUser, updateIsLoggedIn } from "@/app/features/appSlice";
import { RiLoader2Line } from "react-icons/ri";

const formSchema = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
});

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  async function handleRegister(values: z.infer<typeof formSchema>) {
    try {
      const response = await register(values).unwrap();
      dispatch(updateCurrentUser(response))
      dispatch(updateIsLoggedIn(true))
      toast.success(response.message);
      navigate("/")
    } catch (error) {
      console.log(error);
      handleError(error);
    }
  }
  return (
    <div className="_signup bg-no-repeat bg-center bg-cover bg-[url(https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] w-full h-[calc(100vh-60px)] flex justify-center items-center flex-col gap-2">
      <div className="__formContainer absolute sm:left-[120px] sm:min-w-[350px] shadow-[0_0_15px_gray] p-8 rounded-lg bg-transparent">
        {" "}
        <div className="mb-6 flex justify-center flex-col items-center">
          <h1 className="text-center text-4xl text-green-500 font-bold">
            Register
          </h1>
          <p className="text-zinc-400 text-lg">
            &nbsp; &nbsp;&nbsp; Welcome to The CodeSpace &nbsp; &nbsp;&nbsp;
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleRegister)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-green-500">Username</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-md p-2 border outline-none border-[#03CF86a] text-zinc-200 pl-4 max-h-40 w-full bg-[#171F38]"
                      disabled={isLoading}
                      placeholder="Username"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-green-500">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-md p-2 border outline-none border-[#03CF86a] text-zinc-200 pl-4 max-h-40 w-full bg-[#171F38]"
                      disabled={isLoading}
                      type="email"
                      placeholder="Email"
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
                      className="rounded-md p-2 border outline-none border-[#03CF86a] text-zinc-200 pl-4 max-h-40 w-full bg-[#171F38]"
                      // disabled={isLoading}
                      type="password"
                      placeholder="Password"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              // loading={isLoading}
              className="w-full gap-1 bg-blue-700 hover:bg-blue-900 transition-all ease-in-out duration-300"
              variant={"secondary"}
              type="submit"
            >
              {isLoading && <RiLoader2Line className="animate-spin" />}
              Signup
            </Button>
          </form>
        </Form>
        <div>
          <small className="flex text-zinc-400  justify-center items-center mt-5">
            Already have an account?&nbsp;{" "}
            <Link
              to="/user/login"
              className="text-blue-500 hover:underline font-semibold"
            >
              {" "}
              Login
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}
