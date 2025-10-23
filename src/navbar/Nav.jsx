import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false); // control toggler

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src="/images/beefburgur.jpg" alt="Logo" />
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add">
                Add Recipe
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ai">
                AI Meal Suggestion
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
