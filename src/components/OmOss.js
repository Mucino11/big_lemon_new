import React from "react";
import "../styles/aboutUs.css";
import chef from "../assets/restaurant.jpeg";
import restaurant from "../assets/chef.jpeg";

function OmOss() {
  return (
    <section className="mission-container">
      <div className="mission-content">
        <h2>Who We Are</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis
          justo orci, vel interdum nunc malesuada et. Ut non turpis leo. Aenean
          sagittis ornare enim sit amet vestibulum. Proin fringilla convallis
          tellus vel finibus.
        </p>
      </div>
      <img className="mission-image" src={chef} alt="Chef" />
      <img
        className="mission-image mission-image-right"
        src={restaurant}
        alt="Restaurant"
      />
      <div className="mission-goal">
        <h2>Our Goal and Mission</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis
          justo orci, vel interdum nunc malesuada et. Ut non turpis leo. Aenean
          sagittis ornare enim sit amet vestibulum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis
          justo orci, vel interdum nunc malesuada et. Ut non turpis leo. Aenean
          sagittis ornare enim sit amet vestibulum.
        </p>
      </div>
    </section>
  );
}

export default OmOss;
