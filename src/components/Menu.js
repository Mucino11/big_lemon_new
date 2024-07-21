import React from "react";
import "../styles/menu.css";

function Menu() {
  return (
    <section className="gird-container-menu">
      <h2>Our Menu</h2>
      <ul>
        <li>Pizza - $10</li>
        <li>Burger - $8</li>
        <li>Salad - $7</li>
      </ul>
    </section>
  );
}

export default Menu;
