import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const CustomerBooking = ({ booking }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardClass = isHovered ? "card shadow-lg" : "card shadow-sm";
  const [hotel, setHotel] = useState();

  const navigate = useNavigate();

  const { user } = useAuthContext();

  useEffect(() => {
    const fetchHotel = async () => {
      axios
        .get(`https://masso-inc.onrender.com/api/hotel/info/${booking.hotelId}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => setHotel(res.data))
        .catch((err) => console.log(err));
    };

    if (user) {
      fetchHotel();
    }
  });

  // Fetch reviews when the component mounts or when the hotel id changes

  const getHotelImageSrc = () => {
    return (hotel && hotel.imageUrl) || "";
  };

  const getHotelName = () => {
    return (hotel && hotel.name) || "";
  };

  const getHotelLocation = () => {
    return (hotel && hotel.location) || "";
  };

  const cancelBooking=()=>{
    axios
    .delete(`https://masso-inc.onrender.com/api/booking/delete/${booking._id}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
    .then((res) => navigate(`/myBookings`))
    .catch((err) => console.log(err));
  }

  //   const handleCardClick = () => {
  //     if (!user) {
  //       alert("Login for reservation");
  //       return;
  //     }
  //     navigate(`/reservation/${hotel._id}`);
  //   };


  return (
    <div className="col-md-5 m-4">
      <div
        className={cardClass}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        // onClick={handleCardClick}
      >
        <img
          src={getHotelImageSrc()}
          className="card-img-top"
          alt="Hotel"
          style={{ height: "35vh", objectFit: "contain" }}
        />
        <div className="card-body">
          <h5 className="card-title">{getHotelName()}</h5>
          <p className="card-text">Check-in Date: {booking.checkInDate}</p>
          <p className="card-text">Check-out Date: {booking.checkOutDate}</p>
          <p className="card-text">
            Number of guests: {booking.numberOfGuests}
          </p>
          <p className="card-text">Location: {getHotelLocation()}</p>
          <p className="card-text">Price: ${booking.fullPrice}</p>

          <br></br>
          <button
            onClick={cancelBooking}
            className="btn btn-danger mt-3 ml-3"
          >
            Cancel Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerBooking;
