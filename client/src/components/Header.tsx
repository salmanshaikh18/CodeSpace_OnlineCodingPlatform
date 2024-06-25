import { NavLink } from "react-router-dom";
import "../styles/gradientText.css"
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <nav className="max-w-full h-[60px] bg-gray-900 text-white p-3 flex justify-between items-center">
      <NavLink to="/" className={'font-semibold transition-all ease-in-out duration-300 hover:text-[#1DD882] flex justify-center items-center gap-2 hover:scale-105'}>
        <img className="h-8 w-8" src={logo} alt="" />
        <span className="sp font-bold select-none">The CodeSpace</span>
      </NavLink>
      <ul className="flex gap-8 justify-center items-center">
        <li>
          <NavLink to="/code-editor" className={({isActive}) => (
            `${isActive ? "text-[#EA69C0]" : "text-[#956CE6]"} font-semibold transition-all ease-in-out duration-300 hover:text-[#EA69C0] hover:scale-105`
          )}>CodeEditor</NavLink>
        </li>
        <li>
          <NavLink to="/profile/:username" className={({isActive}) => (
          `${isActive ? "text-[#EA69C0]" : "text-[#956CE6]"} font-semibold translate-x-full ease-in-out duration-300 hover:text-[#EA69C0] hover:scale-105`
          )}>
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
