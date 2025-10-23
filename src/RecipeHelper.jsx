import React, { useState } from "react";
import "./RecipeHelper.css";
import MealOfTheDay from "./MealOfTheDay";
import Nav from "./navbar/Nav";
import popularFood from "./components/popularfoods";
import { Link } from "react-router-dom";

export default function RecipeHelper() {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (id) => {
    setOpenCard(openCard === id ? null : id);
  };

  return (
    <div className="recipeHelper">
      <Nav />
      <header>
        <h1 className="mb-4"> Recipe & Nutrition Helper</h1>
        <p className="mb-5">🧘‍♀️ “Fuel your body, feed your soul.”</p>
        <Link to="/add" className="add-recipe-link mt-5">
          Add Recipe
        </Link>
      </header>

      <section className="popular-foods">
        <h1 className="mt-5">Popular Foods</h1>
        <div className="popular-foods-container">
          <div className="food-container grid-4-columns">
            {popularFood.map((food) => (
              <div className="card" key={food.id}>
                <img src={food.img} alt={food.title} />
                <div className="card-body">
                  <h2 style={{ color: "red", fontWeight: "bold" }}>
                    {food.title}
                  </h2>
                  <p>{food.PreparetionTime}</p>

                  {/* Toggle Button */}
                  <button
                    className="toggle-btn"
                    onClick={() => toggleCard(food.id)}
                  >
                    {openCard === food.id ? "▲ Hide Details" : "▼ Show Details"}
                  </button>

                  {/* Hidden / Shown Content */}
                  {openCard === food.id && (
                    <div className="details">
                      <ul>
                        {typeof food.ingredients === "string" ? (
                          food.ingredients
                            .split(",")
                            .map((item, i) => <li key={i}>{item.trim()}</li>)
                        ) : (
                          <li>{food.ingredients}</li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <MealOfTheDay />
      </section>
    </div>
  );
}
