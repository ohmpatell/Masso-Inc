import axios from "axios";
import React, { Component } from "react";
import HotelCard from "./hotelCard.component";

export default class HotelLists extends Component {

  

  constructor(props) {
    super(props);
    this.state = { hotels: [], searchTerm: "" };
  }

  componentDidMount() {
    this.fetchHotels();
  }

  componentDidUpdate(prevProps, prevState) {
    // Fetch hotels only if the search term has changed
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.fetchHotels();
    }
  }

  fetchHotels() {
    const url = `https://masso-inc.onrender.com/api/hotel?search=${this.state.searchTerm}`;
    axios
      .get(url)
      .then((res) => this.setState({ hotels: res.data }))
      .catch((err) => console.log(err));
  }

  handleSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  renderHotelCards() {
    return this.state.hotels.map((currentHotel, i) => (
      <HotelCard hotel={currentHotel} key={i} />
    ));
  }

  render() {
    return (
      <div className="container mt-4">
        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name or location"
            value={this.state.searchTerm}
            onChange={this.handleSearchChange}
          />
        </div>

        {/* Hotel Cards */}
        <div className="hotel-list d-flex flex-wrap container">
          {this.renderHotelCards()}
        </div>
      </div>
    );
  }
}