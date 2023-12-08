import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Reservation = () => {
  const { hotelId } = useParams(); // Get the hotel ID from the route parameters
  const { user } = useAuthContext(); // Assume that 'user' provides the user details and the token
  const [hotel, setHotel] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numOfPeople, setNumOfPeople] = useState(1);

  useEffect(() => {
    setIsLoading(true);

    // Configuration to include the authentication token if necessary
    const config = user?.token
      ? {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      : {};

    // API call to get the hotel details
    axios
      .get(`http://localhost:8081/api/hotel/info/${hotelId}`, config)
      .then((response) => {
        setHotel(response.data); // Set the hotel details in the state
        setError(null);
      })
      .catch((error) => {
        const errorMessage =
          error.response && error.response.status === 404
            ? "Hotel not found."
            : "Error fetching hotel details.";
        setError(errorMessage);
        console.error(errorMessage, error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [hotelId, user?.token]);

  if (isLoading) {
    return <div className="text-center">Loading hotel details...</div>;
  }

  if (error) {
    return <div className="text-center text-danger">{error}</div>;
  }

  const handleReservation = () => {
    // Prepare the reservation details to be sent
    const reservationDetails = {
      startDate: startDate.toISOString(), // Convert the date to an ISO string for transfer
      endDate: endDate.toISOString(),
      numOfPeople: numOfPeople,
      hotelId: hotelId, // Assuming you have hotelId from context or state
    };

    // Configuration to include the authentication token, if necessary
    const config = user?.token
      ? {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      : {};

    // API endpoint to send the reservation details
    // Replace '/api/reservations' with the actual path provided by your backend
    axios
      .post(
        "http://localhost:8081/api/reservations",
        reservationDetails,
        config
      )
      .then((response) => {
        // Handle the successful response here
        console.log("Reservation successful:", response.data);
        // You might want to redirect the user to a confirmation page or update the app's state
      })
      .catch((error) => {
        // Handle the error here
        console.error("Reservation failed:", error);
        // Handle the error by displaying a message to the user, for example
        // You might want to set an error state or use a toast to notify the user
      });
  };

  return (
    <div className="container">
      <h1 className="text-center">
        Reservation Page for {hotel ? hotel.name : "Unknown Hotel"}
      </h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Select Your Stay Dates</h2>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            className="form-control"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            className="form-control"
          />
          <h2>Number of Guests</h2>
          <input
            type="number"
            value={numOfPeople}
            onChange={(e) => setNumOfPeople(e.target.value)}
            min="1"
            className="form-control"
          />
          <button onClick={handleReservation} className="btn btn-primary mt-3">
            Book Now
          </button>
        </div>
      </div>
      {/* Implement the calendar and booking form here */}
    </div>
  );
};

export default Reservation;