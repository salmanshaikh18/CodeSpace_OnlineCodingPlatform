import { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { RootState } from "./app/store";
import Loader from "./components/Loader/Loader";
const Home = lazy(() => import("./pages/Home"));
const CodeEditor = lazy(() => import("./pages/CodeEditor"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const Profile = lazy(() => import("./pages/Profile"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const ChangePassword = lazy(() => import("./pages/ChangePassword"));

const AllRoutes = () => {
  const currentUser = useSelector(
    (state: RootState) => state.appSlice.currentUser
  );
  return (
    <Suspense
      fallback={
        <div className="w-full h-[calc(100dvh-60px)] flex justify-center items-center">
          <Loader />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/code-editor/:urlId?" element={<CodeEditor />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />
        <Route
          path={`/profile/${currentUser.username}`}
          element={<Profile />}
        />
        <Route
          path={`/profile/${currentUser.username}/change-password`}
          element={<ChangePassword />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AllRoutes;
