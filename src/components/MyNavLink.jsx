import { NavLink } from "react-router";


const MyNavLink = ({to, children, className}) => {
    return (
        <NavLink
              to={to}
              className={({ isActive }) =>
                `${isActive ? "text-purple-500 border-b border-purple-500" : ""} ${className} font-semibold pb-1`
              }
            >
              {children}
            </NavLink>
    );
};

export default MyNavLink;