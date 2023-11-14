import React, { Component } from "react";
import axios from "axios";
import "../App.css";

export default class AddHotel extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeNumberOfRooms = this.onChangeNumberOfRooms.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    // this.onChangeFile = this.onChangeFile.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      location: "",
      phone: "",
      email: "",
      description: "",
      numberOfRooms: 0,
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangeNumberOfRooms(e) {
    this.setState({
      numberOfRooms: e.target.value,
    });
  }

  onChangePicture(e) {
    this.setState({
      picture: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("Name: " + this.state.name);
    console.log("Location: " + this.state.location);
    console.log("Phone: " + this.state.phone);
    console.log("Email: " + this.state.email);
    console.log("Description: " + this.state.description);
    console.log("Number of rooms: " + this.state.numberOfRooms);

    const newHotel = {
      name: this.state.name,
      location: this.state.location,
      phone: this.state.phone,
      email: this.state.email,
      description: this.state.description,
      numberOfRooms: Number(this.state.numberOfRooms),
    };

    axios
      .post("http://localhost:8081/hotel/add", newHotel)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    // console.log("File: " + this.state.file);
    this.resetValues();
  }

  resetValues() {
    this.setState({
      name: "",
      location: "",
      phone: "",
      email: "",
      description: "",
      numberOfRooms: 0,
    });
  }

  render() {
    return (
      <div className="container" style={{ justifyItems: "center" }}>
        <div className="col-lg-6">
          <form onSubmit={this.onSubmit}>
            <div class="form-group input">
              <input
                type="text"
                placeholder="Name"
                class="customInput"
                value={this.state.name}
                onChange={this.onChangeName}
              />
            </div>

            <br />

            <div class="form-group input">
              <input
                type="text"
                placeholder="Description"
                class="customInput"
                value={this.state.description}
                onChange={this.onChangeDescription}
              />
            </div>

            <br />

            <div class="form-group input">
              <input
                type="text"
                placeholder="Location"
                class="customInput"
                value={this.state.location}
                onChange={this.onChangeLocation}
              />
            </div>

            <br />

            <div class="form-group input">
              <input
                type="text"
                placeholder="Phone"
                class="customInput"
                value={this.state.phone}
                onChange={this.onChangePhone}
              />
            </div>

            <br />

            <div class="form-group input">
              <input
                type="text"
                placeholder="Email"
                class="customInput"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
            </div>

            <br />

            <div class="form-group input">
              <input
                type="text"
                placeholder="NumberOfRooms"
                class="customInput"
                value={this.state.numberOfRooms}
                onChange={this.onChangeNumberOfRooms}
              />
            </div>

            <br />

            <div class="formButtonsContainer">
              <button
                type="submit"
                class="btn btn-primary"
                style={{ marginRight: "20px" }}
              >
                Submit
              </button>
              <button
                class="btn btn-secondary"
                onClick={this.state.resetValues}
              >
                Cancel
              </button>
            </div>

            {/* <div class="form-group">
              <h4 style={{ color: "gray", paddingLeft: "60px" }}>New Shop</h4>
              <br />
              <label>Upload Logo</label>
              <br />
              <input
                type="file"
                class="form-control-file"
                id="fileId"
                accept="image/*"
                value={this.state.file}
                onChange={this.onChangeFile}
              />
            </div> */}
          </form>
        </div>
      </div>
    );
  }
}
