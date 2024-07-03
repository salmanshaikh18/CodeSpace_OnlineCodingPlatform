import { Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Compiler from "./pages/CodeEditor";
import PageNotFound from "./pages/PageNotFound";
// import { Button } from "./components/ui/button"
import { ThemeProvider } from "@/components/theme-provider";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";

const App = () => {
  const { urlId } = useParams();
  console.log(urlId);
  const currentUser = useSelector(
    (state: RootState) => state.appSlice.currentUser
  );
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/code-editor/:urlId?" element={<Compiler />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />
        <Route
          path={`/profile/${currentUser.username}`}
          element={<Profile />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
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
