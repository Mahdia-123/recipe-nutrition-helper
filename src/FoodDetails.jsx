import React from "react";
import { useParams, Link } from "react-router-dom";
import popularFoodData from "./components/popularfoods";
import Nav from "./navbar/Nav";

import "./FoodDetails.css";

export default function FoodDetail() {
  const { id } = useParams();
  const food = popularFoodData.find((item) => item.id === id);

  if (!food) {
    return (
      <div>
        <Nav />
        <div className="not-found">
          <h2>Food not found 😕</h2>
          <Link to="/" className="back-btn">
            ← Back to Recipes
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="food-detail">
      <Nav />
      <div className="food-detail-container">
        <div className="food-image">
          <img src={food.img} alt={food.title} />
        </div>

        <div className="food-info">
          <h1>{food.title}</h1>

          <p>
            <strong>Preparation Time:</strong>
          </p>
          {food.PreparetionTime.map((time, i) => (
            <p key={`${food.id}-prep-${i}`}>{time}</p>
          ))}

          <h3>Ingredients</h3>
          <ul>
            {food.ingredients.map((item, i) => (
              <li key={`${food.id}-ing-${i}`}>{item}</li>
            ))}
          </ul>

          {food.description && (
            <>
              <h3>Description</h3>
              <p>{food.description}</p>
            </>
          )}

          <Link to="/" className="back-btn">
            ← Back to Recipes
          </Link>
        </div>
      </div>
    </div>
  );
}
