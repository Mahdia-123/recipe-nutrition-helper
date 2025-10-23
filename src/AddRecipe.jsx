import React, { useState, useEffect } from "react";
import "./AddRecipe.css";
import Nav from "./navbar/Nav";

export default function AddRecipe() {
  const [recipes, setRecipes] = useState([]);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [ingredients, setIngredients] = useState("");
  const [filter, setFilter] = useState("");

  // 🧩 Load recipes from localStorage on mount
  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    setRecipes(savedRecipes);
  }, []);

  // 💾 Save to localStorage whenever recipes change
  useEffect(() => {
    if (recipes.length > 0) {
      localStorage.setItem("recipes", JSON.stringify(recipes));
    }
  }, [recipes]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);

    // Convert image to base64 for permanent storage
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result); // base64 preview
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!preview) {
      alert("Please select an image first!");
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title,
      img: preview, // base64 image
      ingredients: ingredients.split(",").map((i) => i.trim()),
    };

    const updatedRecipes = [newRecipe, ...recipes];
    setRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes)); // immediate save

    // Reset form
    setTitle("");
    setImage(null);
    setPreview(null);
    setIngredients("");
  };

  const filteredRecipes = recipes.filter((recipe) => {
    const lowerFilter = filter.trim().toLowerCase();
    if (!lowerFilter) return true;
    const titleMatch = recipe.title.toLowerCase().includes(lowerFilter);
    const ingredientMatch = recipe.ingredients.some((i) =>
      i.toLowerCase().includes(lowerFilter)
    );
    return titleMatch || ingredientMatch;
  });

  const handleDelete = (id) => {
    const updated = recipes.filter((r) => r.id !== id);
    setRecipes(updated);
    localStorage.setItem("recipes", JSON.stringify(updated));
  };

  return (
    <div className="add-recipe-page">
      <Nav />
      <div className="ingredients-container">
        {/* Add Recipe Form */}
        <div className="add-recipes">
          <div className="recipe-section">
            <h2 className="h2">Add a New Recipe</h2>

            <input
              type="text"
              placeholder="Search recipes by name or ingredient..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="filter-input"
            />

            <form onSubmit={handleSubmit} className="recipe-form">
              <label>
                Recipe Title:
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </label>

              <label>
                Recipe Image:
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                />
              </label>

              <label>
                Ingredients (comma separated):
                <input
                  type="text"
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                  placeholder="chicken, lettuce, tomato"
                  required
                />
              </label>

              <button type="submit">Add Recipe</button>
            </form>
          </div>
        </div>

        {/* Live Preview */}
        {preview && (
          <div className="recipe-preview">
            <h3>Preview</h3>
            <div className="card">
              <img src={preview} alt={title} />
              <h2>{title}</h2>
              <ul>
                {ingredients.split(",").map((item, i) => (
                  <li key={i}>{item.trim()}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <h3 className="mt-4">Recipes</h3>

        <div className="recipes-list">
          {filteredRecipes.map((recipe, index) => (
            <div
              className={`recipe-row ${index % 2 !== 0 ? "reverse" : ""}`}
              key={recipe.id}
            >
              <div className="recipe-image">
                <img src={recipe.img} alt={recipe.title} />
              </div>

              <div className="recipe-info">
                <h2>{recipe.title}</h2>
                <ul>
                  {recipe.ingredients.map((i, idx) => (
                    <li key={idx}>{i}</li>
                  ))}
                </ul>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(recipe.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
