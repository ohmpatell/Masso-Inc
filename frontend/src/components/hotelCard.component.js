import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const HotelCard = ({ hotel }) => {
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);
  const [showInput, setShowInput] = useState(false);

  const [isHovered, setIsHovered] = useState(false);
  const cardClass = isHovered ? "card shadow-lg" : "card shadow-sm";

  const navigate = useNavigate();

  const { user } = useAuthContext();

  // Fetch reviews when the component mounts or when the hotel id changes
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8081/api/hotel/reviews/${hotel._id}`
        );
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        // Handle error by displaying a message, etc.
      }
    };
    console.log(`Fetching reviews for hotel ID: ${hotel._id}`);
    fetchReviews();
  }, [hotel._id]);

  const getImageSrc = () => {
    return hotel.imageUrl || ""
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
          `http://localhost:8081/api/hotel/review/${hotel._id}`,
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

  const handleEditHotel = () => {
    if (!user) {
      alert("You must be logged in");
      return;
    }
    navigate(`/hotel/update/${hotel._id}`);
  };

  const handleRemoveHotel = () => {
    if (!user) {
      alert("You must be logged in");
      return;
    }
    axios
      .delete(`http://localhost:8081/api/hotel/delete/${hotel._id}`, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        alert("Hotel deleted successfully");
      })
      .catch((err) => console.log(err));
  };

  const isUserHotelOwner = () => {
    return (
      user && user.accountType != null && user.accountType === "HotelOwner"
    );
  };

  const handleCardClick = () => {
    if (!user) {
      alert("Login for reservation");
      return;
    }
    navigate(`/reservation/${hotel._id}`);
  };

  return (
    <div className="container mt-5">
      <div
        className={cardClass}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCardClick}
      >
        <div className="card-body d-flex justify-content-between">
          {/* Left Side: Information */}
          <div style={{ maxWidth: "70%" }}>
            <h5 className="card-title">{hotel.name}</h5>
            <p className="card-text">Location: {hotel.location}</p>
            <p className="card-text">Phone: {hotel.phone}</p>
            <p className="card-text">Email: {hotel.email}</p>
            <p className="card-text">Number of Rooms: {hotel.numberOfRooms}</p>
            <p className="card-text">Description: {hotel.description}</p>
            {/* Display reviews */}
            {reviews.length > 0 && <h5>Reviews</h5>}
            {reviews.map((review, index) => (
              <p key={index}>{review.text}</p>
            ))}
          </div>

          {/* Right Side: Image and Review Input */}
          
            {hotel.imageUrl && hotel.imageUrl.length > 0 && (
              <div style={{ maxWidth: "30%" }}>
                <img
                  src={getImageSrc()}
                  alt="Hotel"
                  style={{ maxWidth: "100%", marginBottom: "20px" }}
                />
              {/* <button
                onClick={handleLeaveReview}
                className="btn btn-primary mt-3"
              >
                Leave review
              </button> */}
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
                    Submit
                  </button>
                </div>
              )}
              {user && isUserHotelOwner() && (
                <div>
                  <button
                    onClick={handleEditHotel}
                    className="btn btn-warning mt-3 ml-3"
                  >
                    Edit
                  </button>
                  <button
                    onClick={handleRemoveHotel}
                    className="btn btn-danger mt-3 ml-3"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
