import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeHelper from "./RecipeHelper";
import NutritionSuggestion from "./NutritionSuggestion";
import AddRecipe from "./AddRecipe";
import FoodDetail from "./FoodDetails";
import NutritionCoaches from "./NutritionCoaches";
import CoachDetail from "./CoachDetail"; // ✅ default import
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeHelper />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/ai" element={<NutritionSuggestion />} />
        <Route path="/coaches" element={<NutritionCoaches />} />
        <Route path="/coach/:id" element={<CoachDetail />} />
        <Route path="/food/:id" element={<FoodDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
