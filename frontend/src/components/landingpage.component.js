import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to the Hotel Bookings Web Application</h1>
      <p>Discover the best places where to go!</p>
      {/* 
      <img src="url_immagine_hotel" alt="Immagine Hotel" />
      <br />
      */}
      <Link to="/hotel" className="btn btn-primary">
        Find Hotel
      </Link>
    </div>
  );
};

export default LandingPage;
