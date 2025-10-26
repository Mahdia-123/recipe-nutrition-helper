import React, { useState } from "react";
import "./RecipeHelper.css";
import MealOfTheDay from "./MealOfTheDay";
import Coaches from "./NutritionCoaches";
import Nav from "./navbar/Nav";
import popularFoodData from "./components/popularfoods";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function RecipeHelper() {
  const [openCard, setOpenCard] = useState(null);
  const [popularFood, setPopularFood] = useState(
    popularFoodData.map((food) => ({ ...food, liked: false, rating: 0 }))
  );

  const toggleCard = (id) => {
    setOpenCard(openCard === id ? null : id);
  };

  const handleLike = (id) => {
    const updatedFood = popularFood.map((food) =>
      food.id === id ? { ...food, liked: !food.liked } : food
    );
    setPopularFood(updatedFood);
  };

  const handleRating = (id, rating) => {
    const updatedFood = popularFood.map((food) =>
      food.id === id ? { ...food, rating } : food
    );
    setPopularFood(updatedFood);
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
      <section className="couaches">
        <Coaches />
      </section>

      <section className="about-nutrition mt-5 fluid">
        <h1 className="nutritionHead">About Our Website</h1>
        <div className="aboutNutrition">
          <p>
            The Recipe & Nutrition Helper is your go-to web app for discovering
            delicious meals and tracking essential nutritional information.
            Featuring a “Meal of the Day,” popular recipes, and an interactive
            recipe gallery, users can explore, like, and rate their favorite
            dishes. With AI-powered meal suggestions tailored to your
            goals—whether to gain weight, lose weight, or maintain a healthy
            diet—you can get personalized guidance alongside preparation times,
            ingredient lists, and an option to add new recipes. This platform
            helps you fuel your body, make smarter food choices, and enjoy the
            joy of cooking.
          </p>
        </div>
      </section>

      {/* POPULAR FOODS SECTION */}
      <section className="popular-foods">
        <h1 className="mt-5">Popular Foods</h1>
        <div className="popular-foods-container">
          <div className="food-container grid-4-columns">
            {popularFood.map((food) => (
              <div className="card" key={food.id}>
                {/* Link to detail page */}
                <Link to={`/food/${food.id}`} className="card-link">
                  <img src={food.img} alt={food.title} />
                  <h2 style={{ color: "red", fontWeight: "bold" }}>
                    {food.title}
                  </h2>
                </Link>

                {/* Preparation Time */}
                {food.PreparetionTime.map((time, i) => (
                  <p key={`${food.id}-prep-${i}`}>{time}</p>
                ))}

                {/* Toggle ingredients */}
                <button
                  className="toggle-btn"
                  onClick={() => toggleCard(food.id)}
                >
                  {openCard === food.id ? "▲ Hide Details" : "▼ Show Details"}
                </button>

                {openCard === food.id && (
                  <div className="details">
                    <ul>
                      {food.ingredients.map((item, i) => (
                        <li key={`${food.id}-ing-${i}`}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Like & Rating */}
                <div className="interaction-buttons">
                  <button
                    className={`like-btn ${food.liked ? "liked" : ""}`}
                    onClick={() => handleLike(food.id)}
                  >
                    {food.liked ? "Liked ❤️" : "Like ❤️"}
                  </button>

                  <div className="star-rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={
                          food.rating >= star ? "filled-star" : "empty-star"
                        }
                        onClick={() => handleRating(food.id, star)}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEAL OF THE DAY */}
      <section>
        <MealOfTheDay />
      </section>

      {/* FOOTER */}
      <section className="footer">
        <Footer />
      </section>
    </div>
  );
}
