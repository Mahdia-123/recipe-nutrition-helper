import React, { useEffect, useState } from "react";
import "./MealOfTheDay.css";

export default function MealOfTheDay() {
  const meals = [
    {
      id: "1",
      title: "Chicken Biryani",
      img: "images/biryani1.jpg",
      PreparetionTime: [
        "💼 Prep: 30 mins | 🍴 Cook: 1h",
        "🍗 Serves: 8 | 🔥 400 cal/serving",
      ],
      ingredients: [
        "Chicken legs",
        "Curd",
        "Chili powder",
        "Tomatoes",
        "Mint leaves",
        "Coriander leaves",
        "Fried onions",
        "Basmati rice",
      ],
    },
    {
      id: "2",
      title: "Greek Salad",
      img: "images/greeksalad.jpg",
      PreparetionTime: [
        "💼 Prep: 10 mins | 🍴 No cook",
        "🥗 Serves: 2 | 🔥 150 cal/serving",
      ],
      ingredients: [
        "Cucumber",
        "Tomatoes",
        "Feta cheese",
        "Olives",
        "Olive oil",
        "Oregano",
      ],
    },
    {
      id: "3",
      title: "Pasta Alfredo",
      img: "images/pasta.jpg",
      PreparetionTime: [
        "💼 Prep: 15 mins | 🍴 Cook: 20 mins",
        "🍝 Serves: 3 | 🔥 500 cal/serving",
      ],
      ingredients: [
        "Pasta",
        "Butter",
        "Garlic",
        "Cream",
        "Parmesan cheese",
        "Parsley",
      ],
    },
    {
      id: "4",
      title: "Avocado Toast",
      img: "images/avocadotost.jpg",
      PreparetionTime: [
        "💼 Prep: 5 mins | 🍴 No cook",
        "🍞 Serves: 1 | 🔥 250 cal/serving",
      ],
      ingredients: ["Bread", "Avocado", "Salt", "Pepper", "Lemon juice"],
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % meals.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [meals.length]);

  const meal = meals[index];

  return (
    <section className="meal-of-day mt-5">
      <h1>🍽️ Recipe of the Day</h1>

      <div className="meal-grid fade-in">
        <div className="meal-image">
          <img className="img-fluid" src={meal.img} alt={meal.title} />
        </div>

        <div className="meal-details">
          <h2>{meal.title}</h2>

          <div className="prep-info">
            {meal.PreparetionTime.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          <h3>Ingredients:</h3>
          <ul>
            {meal.ingredients.slice(0, 6).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
