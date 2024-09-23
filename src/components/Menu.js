import React from "react";
import "../styles/menu.css";
import food1 from "../assets/food1.JPEG";
import food2 from "../assets/food2.JPEG";
import food3 from "../assets/food3.JPEG";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <section className="grid-container-menu">
      <div className="header-section">
        <h2>Special</h2>
        <Link to="/MenuPage">
          <button>See More Meals</button>
        </Link>
      </div>
      <div className="cards-section">
        <div className="card">
          <img className="food-menu" src={food1} alt="pepper steak" />
          <h3>Salmon Pasta</h3>
          <p>NOK 278</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis
            justo orci.
          </p>
        </div>
        <div className="card">
          <img className="food-menu" src={food2} alt="dish" />
          <h3>Oven baked Salmon</h3>
          <p>NOK 299</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis
            justo orci.
          </p>
        </div>
        <div className="card">
          <img className="food-menu" src={food3} alt="dish" />
          <h3>Pasta Bacon</h3>
          <p>NOK 339</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis
            justo orci.
          </p>
        </div>
      </div>
      <Link to="/MenuPage">
        <button>More Meals</button>
      </Link>
    </section>
  );
}

export default Menu;
