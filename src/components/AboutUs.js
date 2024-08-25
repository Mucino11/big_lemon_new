import React from "react";
import "../styles/aboutUs.css";
import chef from "../assets/restaurant.jpeg";
import restaurant from "../assets/chef.jpeg";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <section className="about-us-grid-container">
      <div className="about-us-content">
        <h2>About us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis
          justo orci, vel interdum nunc malesuada et. Ut non turpis leo. Aenean
          sagittis ornare enim sit amet vestibulum. Proin fringilla convallis
          tellus vel finibus.
        </p>
        <Link to="OmOss" className="learn-more-link">
          Learn More About Us
        </Link>
      </div>
      <div className="image-container">
        <img className="about-us-image" src={chef} alt="chef" />
        <img
          className="about-us-image change-image-position"
          src={restaurant}
          alt="restaurant"
        />
      </div>
    </section>
  );
}

export default AboutUs;
