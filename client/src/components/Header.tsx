import { NavLink } from "react-router-dom";
import "../styles/gradientText.css";
import logo from "../assets/logo.png";
import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [showMenus, setShowMenus] = useState(false);
  return (
    <nav className="max-w-full h-[60px] bg-gray-900 text-white p-3 flex justify-between items-center">
      <NavLink
        to="/"
        className={
          "font-semibold transition-all ease-in-out duration-300 hover:text-[#1DD882] flex justify-center items-center gap-2 hover:scale-105"
        }
      >
        <img className="h-8 w-8" src={logo} alt="" />
        <span className="sp font-bold select-none">The CodeSpace</span>
      </NavLink>
      <ul className="sm:flex hidden px-4 gap-8 justify-center items-center">
        <li>
          <NavLink
            to="/code-editor"
            className={({ isActive }) =>
              `${
                isActive ? "text-[#EA69C0]" : "text-[#956CE6]"
              } font-semibold transition-all ease-in-out duration-300 hover:text-[#EA69C0] hover:scale-105`
            }
          >
            CodeEditor
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/:username"
            className={({ isActive }) =>
              `${
                isActive ? "text-[#EA69C0]" : "text-[#956CE6]"
              } font-semibold transition-all ease-in-out duration-300 hover:text-[#EA69C0] hover:scale-105`
            }
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ai-assistant"
            className={({ isActive }) =>
              `${
                isActive ? "text-[#EA69C0]" : "text-[#956CE6]"
              } font-semibold transition-all ease-in-out duration-300 hover:text-[#EA69C0] hover:scale-105`
            }
          >
            Ai-Assistant
          </NavLink>
        </li>
      </ul>
      <div className="only-on-phone sm:hidden gap-2 flex justify-center items-center text-3xl ">
        {!showMenus ? (
          <IoMenu
            className="z-20 cursor-pointer"
            onClick={() => setShowMenus((prev) => !prev)}
          />
        ) : (
          <div className="z-50 h-screen w-full fixed top-0 right-0 bg-slate-900">
            <div className="fixed right-3 top-4">
              <IoClose
                className="z-20 cursor-pointer"
                onClick={() => setShowMenus((prev) => !prev)}
              />
            </div>

            <div className="mt-[100px] p-4 justify-center items-center flex-col gap-4">
              <ul className="flex flex-col gap-8 justify-center items-center">
                <li className="border-b-2 border-zinc-500 px-4 pb-1">
                  <NavLink
                    onClick={() => setShowMenus(false)}
                    to="/"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-[#EA69C0]" : "text-[#956CE6]"
                      } font-semibold transition-all ease-in-out duration-300 hover:text-[#EA69C0] hover:scale-105`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="border-b-2 border-zinc-500 px-4 pb-1">
                  <NavLink
                    onClick={() => setShowMenus(false)}
                    to="/code-editor"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-[#EA69C0]" : "text-[#956CE6]"
                      } font-semibold transition-all ease-in-out duration-300 hover:text-[#EA69C0] hover:scale-105`
                    }
                  >
                    CodeEditor
                  </NavLink>
                </li>
                <li className="border-b-2 border-zinc-500 px-4 pb-1">
                  <NavLink
                    onClick={() => setShowMenus(false)}
                    to="/profile/:username"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-[#EA69C0]" : "text-[#956CE6]"
                      } font-semibold translate-x-full ease-in-out duration-300 hover:text-[#EA69C0] hover:scale-105`
                    }
                  >
                    Profile
                  </NavLink>
                </li>
                <li className="border-b-2 border-zinc-500 px-4 pb-1">
                  <NavLink
                    onClick={() => setShowMenus(false)}
                    to="/ai-assistant"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-[#EA69C0]" : "text-[#956CE6]"
                      } font-semibold translate-x-full ease-in-out duration-300 hover:text-[#EA69C0] hover:scale-105`
                    }
                  >
                    Ai-Assistant
                  </NavLink>
                </li>
                <li className="border-b-2 border-zinc-500 px-4 pb-1">
                  <NavLink
                    onClick={() => setShowMenus(false)}
                    to="/login"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-[#EA69C0]" : "text-[#956CE6]"
                      } font-semibold translate-x-full ease-in-out duration-300 hover:text-[#EA69C0] hover:scale-105`
                    }
                  >
                    Login
                  </NavLink>
                </li>
                <li className="border-b-2 border-zinc-500 px-4 pb-1">
                  <NavLink
                    onClick={() => setShowMenus(false)}
                    to="/signup"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-[#EA69C0]" : "text-[#956CE6]"
                      } font-semibold translate-x-full ease-in-out duration-300 hover:text-[#EA69C0] hover:scale-105`
                    }
                  >
                    Signup
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
