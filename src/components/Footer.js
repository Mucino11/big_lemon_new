import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-grid-container">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/OmOss">About</Link>
        </li>
        <li>
          <Link to="/MenuPage">Menu</Link>
        </li>
        <li>
          <Link to="/order">Reservations</Link>
        </li>
        <li />
      </ul>

      {/* Social Media Links */}
      <div className="footer-section">
        <h4>Follow Us</h4>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Facebook</p>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Instagram</p>
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>YouTube</p>
        </a>
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
