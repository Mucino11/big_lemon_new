import React, { useEffect, useState } from "react";
import hero from "..//assets/hero.jpeg"; // Import images
import food1 from "../assets/food1.JPEG";
import food2 from "../assets/food2.JPEG";
import food3 from "../assets/food3.JPEG";
import food4 from "../assets/food4.JPEG";
import food5 from "../assets/food5.JPEG";
import food6 from "../assets/food6.JPEG";
import food7 from "../assets/food7.jpg";
import food8 from "../assets/food8.jpg";
import food9 from "../assets/food9.jpg";
import food10 from "../assets/food10.JPEG";
import food11 from "../assets/food11.JPEG";
import "../styles/hero.css";
import "../styles/menuPage.css";

function MenuPage() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    // Define the meals array with imported image paths
    const mealsData = [
      {
        name: "Pepper Steak",
        image: hero, // Use the imported image
        price: 320,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis justo orci.",
      },
      {
        name: "Pasta Salmon",
        image: food3, // Use the imported image
        price: 285,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis justo orci.",
      },
      {
        name: "Trout",
        image: food2, // Use the imported image
        price: 300,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis justo orci.",
      },
      {
        name: "Salmon",
        price: 295,
        image: food1, // Use the imported image
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis justo orci.",
      },

      {
        name: "Blue cheese pasta",
        price: 295,
        image: food4, // Use the imported image
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis justo orci.",
      },
      {
        name: "Avocado Salad",
        price: 295,
        image: food5, // Use the imported image
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis justo orci.",
      },
      {
        name: "Biff strips",
        price: 295,
        image: food6, // Use the imported image
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis justo orci.",
      },
      {
        name: "Salmon",
        price: 295,
        image: food7, // Use the imported image
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis justo orci.",
      },
      {
        name: "Egon Burger",
        price: 295,
        image: food8, // Use the imported image
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis justo orci.",
      },
      {
        name: "Salmon",
        price: 295,
        image: food9, // Use the imported image
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis justo orci.",
      },
      {
        name: "Bruschetta",
        price: 295,
        image: food10, // Use the imported image
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis justo orci.",
      },
      {
        name: "Vegan bowl",
        price: 295,
        image: food11, // Use the imported image
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis justo orci.",
      },
    ];

    setMeals(mealsData);
  }, []);

  return (
    <div className="menu-page">
      {meals.map((meal, index) => (
        <article key={index} className="menu-page-card">
          <img className="menu-page-grid" src={meal.image} alt={meal.name} />
          <h3>{meal.name}</h3>
          <p>NOK {meal.price}</p>
          <p>{meal.description}</p>
        </article>
      ))}
    </div>
  );
}

export default MenuPage;
