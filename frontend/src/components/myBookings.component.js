import axios from "axios";
import React from "react";
import CustomerBooking from "./customerBooking.component";
import { useEffect } from "react";
import { useState } from 'react'
import { useAuthContext } from "../hooks/useAuthContext";


const MyBookings = () => {
  const [bookings, setBookings] = useState([]);  
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchBookings = async () => {
      axios
        .get("https://masso-inc.onrender.com/api/booking/getCustomerBookings", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => setBookings(res.data))
        .catch((err) => console.log(err));
    };

    if (user) {
      fetchBookings();
    }
  });

  const renderBookings = () => {
    return bookings.map((currentBooking, i) => (
      <CustomerBooking booking={currentBooking} key={i} />
    ));
  };

  return (
          <div className="container mt-4">              
            {/* Customer Bookings */}
            <div className="hotel-list d-flex flex-wrap container">
              {renderBookings()}
            </div>
          </div>
        );
};

export default MyBookings;