import React from "react";

function Footer() {
  return (
    <footer className="footer-container">
      {/* Doormat Navigation */}
      <ul>
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

      {/* Social Media Links */}
      <div className="footer-section">
        <h4>Follow Us</h4>
        <ul>
          <li>
            <a href="https://facebook.com">Facebook</a>
          </li>
          <li>
            <a href="https://twitter.com">Twitter</a>
          </li>
          <li>
            <a href="https://instagram.com">Instagram</a>
          </li>
        </ul>
      </div>

      {/* Contact Information */}
      <div className="footer-section">
        <h4>Contact Us</h4>
        <p>Email: info@example.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </footer>
  );
}

export default Footer;
