import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/hero.css";
import hero from "../assets/hero.jpeg"; // Import the image

function Hero() {
  const navigate = useNavigate(); // Create an instance of useNavigate

  const handleReservationClick = () => {
    navigate("/order"); // Path to your OrderForm component
  };

  return (
    <section className="hero-grid-container">
      <div className="hero-content">
        <h1>Big Lemon</h1>
        <p>Oslo</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis
          justo orci, vel interdum nunc malesuada et. Ut non turpis leo. Aenean
          sagittis ornare enim sit amet vestibulum. Proin fringilla convallis
          tellus vel finibus
        </p>
        <button onClick={handleReservationClick}>Reserve Table</button>
      </div>
      <img className="hero-image" src={hero} alt="pepper steak" />
    </section>
  );
}

export default Hero;
