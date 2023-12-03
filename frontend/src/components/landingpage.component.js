import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./login.component";

const LandingPage = () => {
  const [showFindHotel, setShowFindHotel] = useState(true);

  const handleLoginToggle = (isFormVisible) => {
    setShowFindHotel(!isFormVisible);
  };

  return (
    <div>
      <h1>Welcome to the Hotel Bookings Web Application</h1>
      <p>Discover the best places where to go!</p>
      {/* 
      <img src="url_immagine_hotel" alt="Immagine Hotel" />
      <br />
      */}
      <Login onLoginToggle={handleLoginToggle} />
      {showFindHotel && (
        <Link to="/hotel" className="btn btn-primary">
          Find Hotel
        </Link>
      )}
    </div>
  );
};

export default LandingPage;
