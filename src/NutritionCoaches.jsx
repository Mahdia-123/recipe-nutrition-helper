import React from "react";
import { Link } from "react-router-dom";
import "./NutritionCoaches.css";

const coaches = [
  {
    id: "1",
    name: "Abigail Parker",
    specialty: "Hormonal health, stress management, and sustainable nutrition",
    location: "Bethalto, Illinois, USA",
    contact: {
      phone: "217-851-7447",
      email: "abigail@nourishedrevival.com",
      website: "https://www.nourishedrevival.com",
    },
    img: "/images/coach1.jpg",
  },
  {
    id: "2",
    name: "Monique Ryan",
    specialty:
      "Functional nutrition, chronic disease management, and digestive health",
    location:
      "Evanston, Illinois, USA (Teleconsultations available nationwide)",
    contact: {
      phone: "847-864-8689",
      website: "https://moniqueryan.com",
    },
    img: "/images/coache2.jpg",
  },
  {
    id: "3",
    name: "Sarah Pelc Graca",
    specialty: "Sustainable weight management, fitness, and lifestyle coaching",
    location: "Online coaching available",
    contact: {
      website: "https://strongwithsarah.com",
    },
    img: "/images/coach3.jpg",
  },
];

export default function NutritionCoaches() {
  return (
    <div className="coaches-container">
      <h1>Meet Our Nutrition Coaches</h1>
      <div className="coaches-grid">
        {coaches.map((coach) => (
          <Link to={`/coach/${coach.id}`} key={coach.id} className="coach-card">
            <img src={coach.img} alt={coach.name} className="coach-img" />
            <h2>{coach.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
