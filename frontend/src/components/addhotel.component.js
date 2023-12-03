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
    numberOfRooms: 0,
    image: null, // New state for handling image
  });
  let imagePreview = null;
  const { user } = useAuthContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onImageChange = (e) => {
    const file = e.target.files[0];
    formData.image = file;
    imagePreview = URL.createObjectURL(file);
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
      numberOfRooms: 0,
      image: null, // New state for handling image
    });
  };

  return (
    <div className="container" style={{ justifyItems: "center" }}>
      <div className="col-lg-6">
        <form onSubmit={onSubmit}>
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
              placeholder="NumberOfRooms"
              className="customInput"
              name="numberOfRooms"
              value={formData.numberOfRooms}
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
            {imagePreview && (
              <div className="image-preview">
                <img
                  src={imagePreview}
                  alt="Preview"
                  style={{ maxWidth: "100px", maxHeight: "100px" }}
                />
              </div>
            )}
          </div>

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
    </div>
  );
};

export default AddHotel;
// import React, { Component } from "react";
// import axios from "axios";
// import "../App.css";

// export default class AddHotel extends Component {
//   constructor(props) {
//     super(props);
//     this.onChange = this.onChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//     this.resetValues = this.resetValues.bind(this);

//     this.state = {
//       name: "",
//       location: "",
//       phone: "",
//       email: "",
//       description: "",
//       numberOfRooms: 0,
//       image: null, // New state for handling image
//     };
//   }

//   onChange(e) {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   }

//   onImageChange(e) {
//     const file = e.target.files[0];

//     this.setState({
//       image: file,
//       imagePreview: URL.createObjectURL(file), // Set image preview
//     });
//   }

//   onSubmit(e) {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("name", this.state.name);
//     formData.append("location", this.state.location);
//     formData.append("phone", this.state.phone);
//     formData.append("email", this.state.email);
//     formData.append("description", this.state.description);
//     formData.append("numberOfRooms", this.state.numberOfRooms);
//     formData.append("image", this.state.image); // Append the image file

//     axios
//       .post("http://localhost:8081/api/hotel/add", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then((res) => {
//         console.log(res.data);
//         this.resetValues();
//       })
//       .catch((err) => console.log(err));
//   }

//   resetValues() {
//     this.setState({
//       name: "",
//       location: "",
//       phone: "",
//       email: "",
//       description: "",
//       numberOfRooms: 0,
//       image: null,
//       imagePreview: null,
//     });
//   }

//   render() {
//     return (
//       <div className="container" style={{ justifyItems: "center" }}>
//         <div className="col-lg-6">
//           <form onSubmit={this.onSubmit}>
//             <div className="form-group input">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="customInput"
//                 name="name"
//                 value={this.state.name}
//                 onChange={this.onChange}
//               />
//             </div>

//             <br />

//             <div className="form-group input">
//               <input
//                 type="text"
//                 placeholder="Description"
//                 className="customInput"
//                 name="description"
//                 value={this.state.description}
//                 onChange={this.onChange}
//               />
//             </div>

//             <br />

//             <div className="form-group input">
//               <input
//                 type="text"
//                 placeholder="Location"
//                 className="customInput"
//                 name="location"
//                 value={this.state.location}
//                 onChange={this.onChange}
//               />
//             </div>

//             <br />

//             <div className="form-group input">
//               <input
//                 type="text"
//                 placeholder="Phone"
//                 className="customInput"
//                 name="phone"
//                 value={this.state.phone}
//                 onChange={this.onChange}
//               />
//             </div>

//             <br />

//             <div className="form-group input">
//               <input
//                 type="text"
//                 placeholder="Email"
//                 className="customInput"
//                 name="email"
//                 value={this.state.email}
//                 onChange={this.onChange}
//               />
//             </div>

//             <br />

//             <div className="form-group input">
//               <input
//                 type="text"
//                 placeholder="NumberOfRooms"
//                 className="customInput"
//                 name="numberOfRooms"
//                 value={this.state.numberOfRooms}
//                 onChange={this.onChange}
//               />
//             </div>

//             <br />

//             <div className="form-group input">

//               <div className="custom-file">
//                 <input
//                   type="file"
//                   className="custom-file-input"
//                   name="image"
//                   id="image"
//                   onChange={(e) => this.onImageChange(e)}
//                   style={{ cursor: "pointer", display: "none" }}
//                 />
//                 <label className="custom-file-label" htmlFor="image" style={{cursor: "pointer"}}>
//                   Choose Image
//                 </label>
//               </div>
//               {this.state.imagePreview && (
//                 <div className="image-preview">
//                   <img
//                     src={this.state.imagePreview}
//                     alt="Preview"
//                     style={{ maxWidth: "100px", maxHeight: "100px" }}
//                   />
//                 </div>
//               )}
//             </div>

//             <br />

//             <div className="formButtonsContainer">
//               <button
//                 type="submit"
//                 className="btn btn-primary"
//                 style={{ marginRight: "20px" }}
//               >
//                 Submit
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 onClick={this.resetValues}
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }
