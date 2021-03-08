import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
export const Navbar = () => {
  return (
    <div>
      <ul className="ul-navbar">
        <li className="li-navbar">
          <Link to="/">Home</Link>
        </li>
        <li className="li-navbar">
          <Link to="NewsPage">News</Link>
        </li>
        <li className="li-navbar">
          <Link to="FullArticlePage">FullArticle</Link>
        </li>
      </ul>
    </div>
  );
};
