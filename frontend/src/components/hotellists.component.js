import axios from "axios";
import React, { Component } from "react";
import HotelCard from "./hotelCard.component"; 

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

  renderHotelCards() {
    return this.state.hotels.map((currentHotel, i) => (
      <HotelCard hotel={currentHotel} key={i} />
    ));
  }

  render() {
    return <div>{this.renderHotelCards()}</div>;
  }
}
