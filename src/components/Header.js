import React from "react";
import "../styles/header.css";
import logo from "../assets/logo.png";

function Header() {
  return (
    <nav>
      <ul className="header-grid-container">
        <li>
          <a href="/">
            <img className="header-image" src={logo} alt="Our Logo" />
          </a>
        </li>

        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#reservations">Reservations</a>
        </li>
        <li>
          <a href="#order">Order online</a>
        </li>
        <li>
          <a href="#login">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
