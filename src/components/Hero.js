import React from "react";
import "../styles/hero.css";
import hero from "../assets/hero.jpeg"; // Import the image

function Hero() {
  return (
    <section className="hero-grid-container">
      <div className="hero-content">
        <h1>Big Lemon</h1>
        <p>Oslo</p>
        <button>Reserve Table</button>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis
          justo orci, vel interdum nunc malesuada et. Ut non turpis leo. Aenean
          sagittis ornare enim sit amet vestibulum. Proin fringilla convallis
          tellus vel finibus
        </p>
      </div>
      <img className="hero-image" src={hero} alt="pepper steak" />
    </section>
  );
}

export default Hero;
