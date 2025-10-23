import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeHelper from "./RecipeHelper";
import NutritionSuggestion from "./NutritionSuggestion";
import AddRecipe from "./AddRecipe";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeHelper />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="ai" element={<NutritionSuggestion />} />
      </Routes>
    </Router>
  );
}

export default App;
