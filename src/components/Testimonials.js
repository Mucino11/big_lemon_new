import React from "react";
import "../styles/testimonials.css";
import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpeg";
import person3 from "../assets/person3.jpeg";

function Testimonials() {
  return (
    <section className="testimonials-grid-container">
      <div className="testimonial-header">
        <h2>Testimonials</h2>
      </div>
      <div className="testimonial-card-section">
        <div className="testimonmial-card">
          <img className="testimonial-image" src={person1} alt="Mary" />
          <h3>Mary </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis
            justo orci
          </p>
          <p>⭐️⭐️⭐️⭐️</p>
        </div>
        <div className="testimonmial-card">
          <img className="testimonial-image" src={person2} alt="John" />
          <h3>John </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis
            justo orci
          </p>
          <p>⭐️⭐️⭐️⭐️</p>
        </div>
        <div className="testimonmial-card">
          <img className="testimonial-image" src={person3} alt="Joelle" />
          <h3>Joelle </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis
            justo orci
          </p>
          <p>⭐️⭐️⭐️⭐️</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
