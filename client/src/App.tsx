import "./App.css";
import Header from "./components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useGetUserDetailsQuery } from "./app/features/api";
import { updateCurrentUser, updateIsLoggedIn } from "./app/features/appSlice";
import { useParams } from "react-router-dom";
import AllRoutes from "./AllRoutes";

const App = () => {
  const { urlId } = useParams();
  console.log(urlId);

  const { data, error } = useGetUserDetailsQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(updateCurrentUser(data));
      dispatch(updateIsLoggedIn(true));
    } else if (error) {
      dispatch(updateCurrentUser({}));
      dispatch(updateIsLoggedIn(false));
    }
    // console.log("data: ", data)
    // console.log("error: ", error)
  }, [data, error]);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <AllRoutes />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </ThemeProvider>
  );
};

export default App;
