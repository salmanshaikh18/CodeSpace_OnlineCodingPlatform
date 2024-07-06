import { Link } from "react-router-dom";
// import "./IsLoggedIn.css";

const PleaseLogin = ({ feature }: any) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-[calc(100vh-60px)]">
      <div className="flex justify-center items-center font-semibold">
        <Link to="/user/login">
          <h1 className="sm:text-7xl text-[45px] hover:text-blue-700 transition-all ease-in-out duration-300 text-blue-500 border-b-2 border-zinc-600">
            Please Login
          </h1>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="sm:text-xl text-lg text-zinc-300">
          to access{" "}
          <span className="text-green-700 font-semibold">{feature}</span>
        </h1>
      </div>
    </div>
  );
};

export default PleaseLogin;
