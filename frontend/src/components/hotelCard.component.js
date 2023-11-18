import React from "react";

const HotelCard = ({ hotel }) => {
  const getImageSrc = () => {
    if (hotel.image && hotel.image.data) {
      const arrayBufferView = new Uint8Array(hotel.image.data);
      const blob = new Blob([arrayBufferView], { type: "image/jpeg" });
      const imageUrl = URL.createObjectURL(blob);
      return imageUrl;
    }
    return null;
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body d-flex justify-content-between">
          {/* Left Side: Information */}
          <div style={{ maxWidth: "70%" }}>
            <h5 className="card-title">{hotel.name}</h5>
            <p className="card-text">Location: {hotel.location}</p>
            <p className="card-text">Phone: {hotel.phone}</p>
            <p className="card-text">Email: {hotel.email}</p>
            <p className="card-text">Number of Rooms: {hotel.numberOfRooms}</p>
            <p className="card-text">Description: {hotel.description}</p>
          </div>

          {/* Right Side: Image */}
          {hotel.image && (
            <div style={{ maxWidth: "30%", 
            borderRadius: "10px"}}>
              <img
                src={getImageSrc()}
                alt="Hotel"
                style={{ maxWidth: "100%" }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
