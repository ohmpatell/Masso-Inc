import React from "react";

const HotelCard = ({ hotel }) => (
  <div className="container mt-5">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{hotel.name}</h5>
        <p className="card-text">Location: {hotel.location}</p>
        <p className="card-text">Phone: {hotel.phone}</p>
        <p className="card-text">Email: {hotel.email}</p>
        <p className="card-text">Number of Rooms: {hotel.numberOfRooms}</p>
        <p className="card-text">Description: {hotel.description}</p>
      </div>
    </div>
  </div>
);

export default HotelCard;
