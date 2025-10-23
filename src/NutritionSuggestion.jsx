import React, { useState } from "react";
import OpenAI from "openai";
import Nav from "./navbar/Nav";
import "./NutritionSuggestion.css";

export default function NutritionSuggestion() {
  const [goal, setGoal] = useState("");
  const [preferences, setPreferences] = useState("");
  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState(null);

  const client = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true, // for demo — move to backend for production
  });

  const getSuggestion = async () => {
    if (!goal) {
      alert("Please select a goal first!");
      return;
    }

    setLoading(true);
    setMeals(null);

    try {
      const aiResponse = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are a certified nutritionist. Always return JSON with keys: breakfast, lunch, dinner, snacks. Each key should have an object with 'description', 'calories', and 'recipe' (with ingredients & steps).",
          },
          {
            role: "user",
            content: `
Goal: ${goal}
Preferences: ${preferences || "none"}
Suggest a one-day healthy meal plan in JSON format.
`,
          },
        ],
        response_format: { type: "json_object" },
      });

      const data = JSON.parse(aiResponse.choices[0].message.content);
      setMeals(data);
    } catch (err) {
      console.error(err);
      alert("Error generating meal plan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="body">
      <Nav />
      <div className="nutrition-suggestion">
        <h2>AI Nutrition Coach 🥗</h2>
        <p>Select your goal and get a personalized day meal plan.</p>

        <div className="goal-buttons">
          {["Lose Weight", "Gain Weight", "Maintain Health"].map((g) => (
            <button
              key={g}
              className={goal === g ? "active" : ""}
              onClick={() => setGoal(g)}
            >
              {g}
            </button>
          ))}
        </div>

        <textarea
          placeholder="Optional: Mention preferences (e.g., vegetarian, no dairy)..."
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
        />

        <button onClick={getSuggestion} disabled={loading}>
          {loading ? "Generating..." : "Get My Meal Plan"}
        </button>
      </div>
      {meals && (
        <div className="meal-plan">
          {["breakfast", "snacks", "lunch", "dinner"].map((mealType) =>
            meals[mealType] ? (
              <div className="meal-section" key={mealType}>
                <h3>{mealType.charAt(0).toUpperCase() + mealType.slice(1)}</h3>
                <div className="meal-card">
                  <p>
                    <strong>Description:</strong> {meals[mealType].description}
                  </p>
                  <p>
                    <strong>Calories:</strong> {meals[mealType].calories}
                  </p>

                  {meals[mealType].recipe && (
                    <>
                      <h4>Recipe:</h4>
                      <ul>
                        {meals[mealType].recipe.ingredients?.map((i, idx) => (
                          <li key={idx}>{i}</li>
                        ))}
                      </ul>
                      <ol>
                        {meals[mealType].recipe.steps?.map((s, idx) => (
                          <li key={idx}>{s}</li>
                        ))}
                      </ol>
                    </>
                  )}
                </div>
              </div>
            ) : null
          )}
        </div>
      )}
    </div>
  );
}
