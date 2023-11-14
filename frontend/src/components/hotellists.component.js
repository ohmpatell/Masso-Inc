import axios from "axios";
import React, { Component } from "react";

const Hotel = (props) => (
  <tr>
    <td>{props.hotel.name}</td>
    <td>{props.hotel.location}</td>
    <td>{props.hotel.phone}</td>
    <td>{props.hotel.email}</td>
    <td>{props.hotel.numberOfRooms}</td>
    <td>{props.hotel.description}</td>    
  </tr>
);

export default class HotelLists extends Component {
  constructor(props) {
    super(props);
    this.state = { hotels: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8081/hotel")
      .then((res) => this.setState({ hotels: res.data }))
      .catch((err) => console.log(err));
  }

  componentDidUpdate() {
    axios
      .get("http://localhost:8081/hotel")
      .then((res) => this.setState({ hotels: res.data }))
      .catch((err) => console.log(err));
  }

  HotelLists() {
    return this.state.hotels.map(function (currentHotel, i) {
      return <Hotel hotel={currentHotel} key={i} />;
    });
  }

  render() {
    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Number of rooms</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>{this.HotelLists()}</tbody>
      </table>
    );
  }
}
