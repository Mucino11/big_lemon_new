import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import logo from "../assets/logo.png";

function Header() {
  return (
    <nav>
      <ul className="header-grid-container">
        <li>
          <Link to="/">
            <img className="header-image" src={logo} alt="Our Logo" />
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/OmOss">About</Link>
        </li>
        <li>
          <Link to="#menu">Menu</Link>
        </li>
        <li>
          <Link to="/order">Reservations</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
