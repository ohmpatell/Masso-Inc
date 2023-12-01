import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const EditHotel = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hotel, setHotel] = useState({
    name: "",
    location: "",
    phone: "",
    email: "",
    description: "",
    numberOfRooms: 0,
    image: null,
    imagePreview: null,
    hotelId: id,
  });
  const { user } = useAuthContext();

  useEffect(() => {
    axios
      .get(`http://localhost:8081/api/hotel/${id}`)
      .then((res) => {
        const hotelData = res.data;
        console.log("API RESPONSE: " + hotelData);
        setHotel({
          name: hotelData.name,
          location: hotelData.location,
          phone: hotelData.phone,
          email: hotelData.email,
          description: hotelData.description,
          numberOfRooms: hotelData.numberOfRooms,
          imagePreview: hotelData.image
            ? URL.createObjectURL(new Blob([hotelData.image.data]))
            : null,
        });
        console.log("IDD: " + id);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const onChange = (e) => {
    setHotel({
      ...hotel,
      [e.target.name]: e.target.value,
    });
  };

  const onImageChange = (e) => {
    const file = e.target.files[0];

    setHotel({
      ...hotel,
      image: file,
      imagePreview: URL.createObjectURL(file),
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if(!user){
      alert('You must be logged in');
      return;
    }

    const formData = new FormData();
    formData.append("name", hotel.name);
    formData.append("location", hotel.location);
    formData.append("phone", hotel.phone);
    formData.append("email", hotel.email);
    formData.append("description", hotel.description);
    formData.append("numberOfRooms", hotel.numberOfRooms);
    formData.append("image", hotel.image);

    axios
      .put(`http://localhost:8081/api/hotel/update/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          'Authorization': `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        alert("Hotel updated successfully");
        resetValues();
        navigate("/hotel");
      })
      .catch((err) => console.log(err));
  };

  const resetValues = () => {
    setHotel({
      name: "",
      location: "",
      phone: "",
      email: "",
      description: "",
      numberOfRooms: 0,
      image: null,
      imagePreview: null,
      hotelId: id,
    });
  };

  const cancelEdit=()=>{
    resetValues();
    navigate("/hotel");
  }

  return (
    <div className="container" style={{ justifyItems: "center" }}>
      <div className="col-lg-6">
        <form onSubmit={onSubmit}>
          <div className="form-group input">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={hotel.name}
              onChange={onChange}
            />
          </div>

          <div className="form-group input">
            <label>Description:</label>
            <input
              type="text"
              className="form-control"
              name="description"
              value={hotel.description}
              onChange={onChange}
            />
          </div>

          <div className="form-group input">
            <label>Location:</label>
            <input
              type="text"
              className="form-control"
              name="location"
              value={hotel.location}
              onChange={onChange}
            />
          </div>

          <div className="form-group input">
            <label>Phone:</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={hotel.phone}
              onChange={onChange}
            />
          </div>

          <div className="form-group input">
            <label>Email:</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={hotel.email}
              onChange={onChange}
            />
          </div>

          <div className="form-group input">
            <label>Number of Rooms:</label>
            <input
              type="text"
              className="form-control"
              name="numberOfRooms"
              value={hotel.numberOfRooms}
              onChange={onChange}
            />
          </div>

          <div className="form-group input">
            <label>Image:</label>
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                name="image"
                id="image"
                onChange={(e) => onImageChange(e)}
              />
              <label className="custom-file-label" htmlFor="image">
                Choose Image
              </label>
            </div>
            {hotel.imagePreview && (
              <div className="image-preview">
                <img
                  src={hotel.imagePreview}
                  alt="Preview"
                  style={{ maxWidth: "100px", maxHeight: "100px" }}
                />
              </div>
            )}
          </div>

          <div className="formButtonsContainer">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={cancelEdit}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditHotel;
