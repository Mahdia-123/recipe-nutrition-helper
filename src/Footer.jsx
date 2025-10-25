import React from "react";
import { FaInstagram, FaYoutube, FaFacebook, FaTiktok } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand / Motto */}
        <div className="footer-brand">
          <h2>🍴 Recipe & Nutrition Helper</h2>
          <p>Eat Smart. Live Better. Cook with AI.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/add">Add Recipe</a>
            </li>
            <li>
              <a href="/ai">AI Meal Suggestion</a>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="icons">
            <a
              href="https://www.instagram.com/dr.nooshinfakhr.nutrition/"
              target="blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@NutritionByKylie/featured"
              target="blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.facebook.com/groups/801803660400170"
              target="blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <a href="#">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Powered by <strong>GPT-4 mini</strong> — your AI meal planner
        </p>
        <p>© 2025 All rights reserved.</p>
      </div>
    </footer>
  );
}
