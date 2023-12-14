import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faParking,
  faSwimmingPool,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import HotelBooking from "./hotelBooking.component";

const Reservation = () => {
  const { hotelId } = useParams();
  const { user } = useAuthContext();
  const [hotel, setHotel] = useState(null);
  const [error, setError] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numOfPeople, setNumOfPeople] = useState(1);
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [fullPrice, setFullPrice]=useState("0")

  const navigate = useNavigate();

  useEffect(() => {
    const config = user?.token
      ? {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      : {};

    axios
      .get(`https://masso-inc.onrender.com/api/hotel/info/${hotelId}`, config)
      .then((response) => {
        setHotel(response.data);
        setError(null);
      })
      .catch((error) => {
        const errorMessage =
          error.response && error.response.status === 404
            ? "Hotel not found."
            : "Error fetching hotel details.";
        setError(errorMessage);
        console.error(errorMessage, error);
      });
  }, [hotelId, user?.token]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://masso-inc.onrender.com/api/hotel/reviews/${hotelId}`
        );
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [hotelId]);

  useEffect(() => {
    const fetchBookings = async () => {
      axios
        .get(`https://masso-inc.onrender.com/api/booking//getHotelBookings/${hotelId}`, {
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
  }, [hotelId]);

  const handleReservation = () => {
    const reservationDetails = {
      hotelId: hotelId,
      checkInDate: startDate.toISOString(),
      checkOutDate: endDate.toISOString(),
      numberOfGuests: numOfPeople,
      fullPrice:fullPrice
    };

    const config = user?.token
      ? {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      : {};

    axios
      .post(
        "https://masso-inc.onrender.com/api/booking/create",
        reservationDetails,
        config
      )
      .then((response) => {
        console.log("Reservation successful:", response.data);
        navigate('/hotel')
      })
      .catch((error) => {
        console.error("Reservation failed:", error);
      });
  };

  const handleLeaveReview = () => {
    setShowInput(true);
  };

  const handleReviewChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmitReview = async () => {
    if (reviewText.length > 0 && reviewText.split(" ").length <= 20) {
      try {
        const response = await axios.post(
          `https://masso-inc.onrender.com/api/hotel/review/${hotelId}`,
          { text: reviewText }
        );
        const newReview = response.data;
        setReviews((currentReviews) => [...currentReviews, newReview]);
        setReviewText("");
        setShowInput(false);
      } catch (error) {
        console.error("Error posting review:", error);
      }
    } else {
      alert("Review must be 20 words or less.");
    }
  };

  const isUserHotelOwner = () => {
    return (
      user && user.accountType != null && user.accountType === "HotelOwner"
    );
  };

  const renderBookings = () => {
    return bookings.map((currentBooking, i) => (
      <HotelBooking booking={currentBooking} key={i} />
    ));
  };

  const calculateFullPrice = () => {
    if (startDate && endDate && hotel) {
      let days = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
      setFullPrice(days*hotel.price);
    }
  };

  return (
    <>
      <div className="container-fluid pt-5 mb-4">
        <div className="row">
          <div className="col-md-6">
            {/* Hotel Image Section */}
            <img
              src={hotel?.imageUrl || "default-image-url"}
              alt={hotel?.name || "Hotel Image"}
              className="img-fluid rounded"
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>

          <div className="col-md-6">
            {/* Hotel Details Section */}
            <div className="p-4">
              <h2>{hotel?.name}</h2>
              <p>{hotel?.location}</p>
              <p>{hotel?.description}</p>
              <p>Price per stay: ${hotel?.price}</p>
              <h3>Amenities:</h3>
              <ul>
                <li className="mb-2">
                  <FontAwesomeIcon icon={faWifi} className="mr-2" />
                  Free Wi-Fi
                </li>
                <li>
                  <FontAwesomeIcon icon={faParking} className="mr-2" />
                  Free Parking
                </li>
                <li>
                  <FontAwesomeIcon icon={faSwimmingPool} className="mr-2" />
                  Swimming Pool
                </li>
                <li>
                  <FontAwesomeIcon icon={faTv} className="mr-2" />
                  TV in rooms
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {user && !isUserHotelOwner() && (
        <div className="container mb-4">
          <h1 className="text-center">Reserve Now!</h1>
          <div className="row justify-content-center">
            <div className="col-md-6">
              {/* Reservation Form Section */}
              <p>Select Your Stay Dates</p>
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
              <p>For how many guests?</p>
              <input
                type="number"
                value={numOfPeople}
                onChange={(e) => setNumOfPeople(e.target.value)}
                min="1"
                className="form-control"
              />
              <p>Full price:</p>
              <p>${fullPrice}</p>

              <button
                onClick={calculateFullPrice}
                className="btn btn-primary mt-3"
              >
                Calculate
              </button>
              {fullPrice!="0" && (
              <button
                onClick={handleReservation}
                className="btn btn-primary mt-3"
              >
                Book Now
              </button>
              )}
            </div>
          </div>
        </div>
      )}
      {user && (
        // Reviews Section
        <div className="container mb-4">
          <h2 className="text-center">Reviews</h2>
          {reviews.length > 0 ? (
            <div>
              {reviews.map((review, index) => (
                <p key={index}>{review.text}</p>
              ))}
            </div>
          ) : (
            <p>No reviews yet.</p>
          )}

          {isUserHotelOwner() && (
            <div>
              <div className="text-center">
                <button
                  onClick={() => navigate(`/hotel/update/${hotel?._id}`)}
                  className="btn btn-warning mt-3 ml-3"
                >
                  Edit Hotel
                </button>
                <h2 className="text-center">Bookings</h2>
              </div>
              <div className="hotel-list d-flex flex-wrap container">
                {renderBookings()}
              </div>
            </div>
          )}

          {user && !isUserHotelOwner() && (
            // Leave Review Section for Guests
            <div className="text-center mt-3">
              <button onClick={handleLeaveReview} className="btn btn-primary">
                Leave a Review
              </button>
              {showInput && (
                <div>
                  <textarea
                    value={reviewText}
                    onChange={handleReviewChange}
                    rows="3"
                    className="form-control mt-3"
                  ></textarea>
                  <button
                    onClick={handleSubmitReview}
                    className="btn btn-primary mt-3"
                  >
                    Submit Review
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Reservation;
