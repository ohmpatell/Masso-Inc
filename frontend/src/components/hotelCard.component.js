import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const HotelCard = ({ hotel }) => {

  const [isHovered, setIsHovered] = useState(false);
  const cardClass = isHovered ? "card shadow-lg" : "card shadow-sm";

  const navigate = useNavigate();

  const { user } = useAuthContext();

  // Fetch reviews when the component mounts or when the hotel id changes

  const getImageSrc = () => {
    return hotel.imageUrl || ""
  };
  


  const handleCardClick = () => {
    if (!user) {
      alert("Login for reservation");
      return;
    }
    navigate(`/reservation/${hotel._id}`);
  };

  return (
    <div className="col-md-5 m-4">
      <div
        className={cardClass}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCardClick}
      >
        <img
          src={getImageSrc()}
          className="card-img-top"
          alt="Hotel"
          style={{ height: "35vh", objectFit: "contain" }}
        />
        <div className="card-body">
          <h5 className="card-title">{hotel.name}</h5>
          <p className="card-text">Location: {hotel.location}</p>
          <p className="card-text">Price per night: ${hotel.price}</p>
        </div>
        
      </div>
    </div>
  );
};

export default HotelCard;