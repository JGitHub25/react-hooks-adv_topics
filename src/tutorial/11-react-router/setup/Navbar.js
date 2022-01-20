import React from "react";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  const showActiveStyle = ({ isActive }) => {
    return {
      color: isActive ? "red" : "",
    };
  };
  return (
    <nav>
      <ul>
        <li>
          <NavLink style={showActiveStyle} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink style={showActiveStyle} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink style={showActiveStyle} to="/people">
            People
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
