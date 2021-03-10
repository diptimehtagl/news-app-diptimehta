import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
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
        <li className="li-navbar floatRight">
          <Link to="FullArticlePage">Full Articles</Link>
        </li>
        <li className="li-navbar floatRight">
          <Link to="/">Sports</Link>
        </li>
        <li className="li-navbar floatRight">
          <Link to="/">Buisness</Link>
        </li>
        <li className="li-navbar floatRight">
          <Link to="/">Entertainment</Link>
        </li>
        <li className="li-navbar floatRight">
          <Link to="/">Covid-19</Link>
        </li>
        <li className="li-navbar floatRight">
          <Link to="FullArticlePage">Politics</Link>
        </li>
      </ul>
    </div>
  );
};
