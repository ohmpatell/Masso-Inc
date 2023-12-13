import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import { useAuthContext } from "../hooks/useAuthContext";

const AddHotel = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    phone: "",
    email: "",
    description: "",
    price: 0,
    imageUrl: null,
  });
  const { user } = useAuthContext();
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      imageUrl: file,
    }));

    // Update image preview
    const newImagePreview = URL.createObjectURL(file);
    setImagePreview(newImagePreview);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      alert("You must be logged in");
      return;
    }

    axios
      .post("http://localhost:8081/api/hotel/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        resetValues();
      })
      .catch((err) => console.log(err));
  };

  const resetValues = () => {
    setFormData({
      name: "",
      location: "",
      phone: "",
      email: "",
      description: "",
      price: 0,
      imageUrl: null,
    });
    setImagePreview(null);
  };

  return (
    <div className="container mt-5 vh-100">
      <h2 className="text-center mb-4">Add your hotel to Masso</h2>
      <div className="row">
        {/* Hotel Form */}
        <div className="col-lg-6">
          <form onSubmit={onSubmit}>
            {/* ... (previous form fields) ... */}
            <div className="form-group input">
            <input
              type="text"
              placeholder="Name"
              className="customInput"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <br />

          <div className="form-group input">
            <input
              type="text"
              placeholder="Description"
              className="customInput"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <br />

          <div className="form-group input">
            <input
              type="text"
              placeholder="Location"
              className="customInput"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          <br />

          <div className="form-group input">
            <input
              type="text"
              placeholder="Phone"
              className="customInput"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <br />

          <div className="form-group input">
            <input
              type="text"
              placeholder="Email"
              className="customInput"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <br />

          <div className="form-group input">
            <input
              type="text"
              placeholder="price"
              className="customInput"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>

          <br />

            <div className="form-group input">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  name="image"
                  id="image"
                  onChange={onImageChange}
                  style={{ cursor: "pointer", display: "none" }}
                />
                <label
                  className="custom-file-label"
                  htmlFor="image"
                  style={{ cursor: "pointer" }}
                >
                  Choose Image
                </label>
              </div>
              
            </div>

            {/* ... (previous form buttons) ... */}
            <br />

          <div className="formButtonsContainer">
            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginRight: "20px" }}
            >
              Submit
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={resetValues}
            >
              Cancel
            </button>
          </div>
          </form>
        </div>

        {/* Hotel Card */}
        <div className="col-lg-6">
  <div className="card">
    <img
      src={imagePreview || "https://placekitten.com/300/200"}
      className="card-img-top"
      alt="Hotel"
      style={{ maxWidth: "100%", maxHeight: "200px", objectFit: "cover" }}
    />
    <div className="card-body">
      <h5 className="card-title">{formData.name || "Hotel Name"}</h5>
      <p className="card-text">
        {formData.description || "Hotel Description"}
      </p>
      <p className="card-text">Location: {formData.location || "Unknown"}</p>
      <p className="card-text">Price per night: ${formData.price || "0"}</p>
    </div>
  </div>
</div>



      </div>
    </div>
  );
};

export default AddHotel;
