import React from "react";
import "../styles/header.css";

function Header() {
  return (
    <nav>
      <ul className="header-grid-container">
        <li>
          <a href="/">Logo</a>
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
