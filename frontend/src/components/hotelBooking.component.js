import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

const HotelBooking = ({ booking }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardClass = isHovered ? "card shadow-lg" : "card shadow-sm";
  const [customer, setCustomer] = useState();

  const { user } = useAuthContext();

  useEffect(() => {
    const fetchCustomer = async () => {
      axios
        .get(`https://masso-inc.onrender.com/api/user/info/${booking.customerId}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => setCustomer([res.data.firstName, res.data.lastName]))
        .catch((err) => console.log(err));
    };

    if (user) {
      fetchCustomer();
    }
  });

  const getCustomerName = () => {
    return (customer && (customer[0] + " " + customer[1])) || "";
  };

  return (
    <div className="col-md-5 m-4">
      <div
        className={cardClass}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="card-body">
          <h5 className="card-title">Customer: {getCustomerName()}</h5>
          <p className="card-text">Check-in Date: {booking.checkInDate}</p>
          <p className="card-text">Check-out Date: {booking.checkOutDate}</p>
          <p className="card-text">
            Number of guests: {booking.numberOfGuests}
          </p>
          <p className="card-text">Price: ${booking.fullPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default HotelBooking;
