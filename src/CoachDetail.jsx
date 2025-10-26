import React from "react";
import { useParams, Link } from "react-router-dom";
import "./CoachDetail.css";

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
    location: "Evanston, Illinois, USA (Teleconsultations available)",
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

export default function CoachDetail() {
  const { id } = useParams();
  const coach = coaches.find((c) => c.id === id);

  if (!coach) {
    return (
      <div>
        <h2>Coach not found 😕</h2>
        <Link to="/coaches" className="back-btn">
          ← Back to Coaches
        </Link>
      </div>
    );
  }

  return (
    <div className="coach-detail">
      <div className="coach-detail-container">
        <div className="coach-image">
          <img src={coach.img} alt={coach.name} />
        </div>
        <div className="coach-info">
          <h1>{coach.name}</h1>
          <p>
            <strong>Specialty:</strong> {coach.specialty}
          </p>
          <p>
            <strong>Location:</strong> {coach.location}
          </p>
          {coach.contact.phone && (
            <p>
              <strong>Phone:</strong> {coach.contact.phone}
            </p>
          )}
          {coach.contact.email && (
            <p>
              <strong>Email:</strong> {coach.contact.email}
            </p>
          )}
          {coach.contact.website && (
            <p>
              <strong>Website:</strong>{" "}
              <a
                href={coach.contact.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {coach.contact.website}
              </a>
            </p>
          )}
          <Link to="/coaches" className="back-btn">
            ← Back to Coaches
          </Link>
        </div>
      </div>
    </div>
  );
}
