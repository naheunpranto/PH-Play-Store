import { Link, NavLink } from "react-router";
import logoImg from "../assets/images/logo.png";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="shadow">
      <div className="flex justify-between items-center gap-2 py-[8px] container mx-auto">
        <img src={logoImg} alt="" className="w-[50px]" />
        <ul className="flex justify-between gap-2 items-center">
          <li>
            <NavLink to={"/"} className={(isActive) => `${isActive ? "bg-red-400" : "bg-yellow-400"}`}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/apps"}>Apps</NavLink>
          </li>
          <li>
            <NavLink to={"/installApps"}>Installation</NavLink>
          </li>
        </ul>
        <button className="btn bg-purple-500 text-white"><FaGithub />Contribute</button>
      </div>
    </nav>
  );
};

export default Navbar;
