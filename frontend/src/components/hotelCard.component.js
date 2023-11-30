import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const HotelCard = ({ hotel }) => {
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([]);
  const [showInput, setShowInput] = useState(false);

  const navigate = useNavigate();

  // Fetch reviews when the component mounts or when the hotel id changes
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/hotel/reviews/${hotel._id}`);
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        // Handle error by displaying a message, etc.
      }
    };
    console.log(`Fetching reviews for hotel ID: ${hotel._id}`);
    fetchReviews();
  }, [hotel._id]);

  const getImageSrc = () => {
    if (hotel.image && hotel.image.data) {
      const arrayBufferView = new Uint8Array(hotel.image.data);
      const blob = new Blob([arrayBufferView], { type: 'image/jpeg' });
      const imageUrl = URL.createObjectURL(blob);
      return imageUrl;
    }
    return null;
  };

  const handleLeaveReview = () => {
    setShowInput(true);
  };

  const handleReviewChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmitReview = async () => {
    if (reviewText.length > 0 && reviewText.split(' ').length <= 20) {
      try {
        const response = await axios.post(`http://localhost:8081/hotel/review/${hotel._id}`, { text: reviewText });
        const newReview = response.data;
        setReviews(currentReviews => [...currentReviews, newReview]);
        setReviewText('');
        setShowInput(false);
      } catch (error) {
        console.error('Error posting review:', error);
      }
    } else {
      alert('Review must be 20 words or less.');
    }
  };
  
  const handleEditHotel = () => {
    navigate(`/edit/${hotel._id}`);
  };

    
  return (
    <div className='container mt-5'>
      <div className='card'>
        <div className='card-body d-flex justify-content-between'>
          {/* Left Side: Information */}
          <div style={{ maxWidth: '70%' }}>
            <h5 className='card-title'>{hotel.name}</h5>
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
          {hotel.image && (
            <div style={{ maxWidth: '30%' }}>
              <img
                src={getImageSrc()}
                alt='Hotel'
                style={{ maxWidth: '100%', marginBottom: '20px' }}
              />
              <button onClick={handleLeaveReview} className='btn btn-primary mt-3'>Leave review</button>
              {showInput && (
                <div>
                  <textarea
                    value={reviewText}
                    onChange={handleReviewChange}
                    rows='3'
                    className='form-control mt-3'
                  ></textarea>
                  <button onClick={handleSubmitReview} className='btn btn-primary mt-3'>Submit</button>
                </div>
              )}
              <button onClick={handleEditHotel} className='btn btn-warning mt-3 ml-3'>Edit</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
