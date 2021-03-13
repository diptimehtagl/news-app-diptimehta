import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { navbarItems } from "../../constants/dataConstants";
export const Navbar = () => {
  return (
    <div>
      <ul className="ulNavbar">
        <li className="liNavbar">
          <Link to="/">Home</Link>
        </li>
        <li className="liNavbar">
          <Link to="NewsPage">News</Link>
        </li>
        {navbarItems.map((item) => (
          <li className="liNavbar floatRight">
            <Link to="/">{item.value}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
