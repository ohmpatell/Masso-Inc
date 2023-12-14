import axios from "axios";
import React from "react";
import HotelCard from "./hotelCard.component";
import { useEffect } from "react";
import { useState } from 'react'
import { useAuthContext } from "../hooks/useAuthContext";

const CreatedHotelList = () => {
  const [hotels, setHotels] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchHotels = async () => {
      axios
        .get("http://localhost:8081/api/hotel/created", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => setHotels(res.data))
        .catch((err) => console.log(err));
    };

    if (user) {
      fetchHotels();
    }
  });
  //   }, [dispatch, user])

  const renderHotelCards = () => {
    return hotels.map((currentHotel, i) => (
      <HotelCard hotel={currentHotel} key={i} />
    ));
  };

  return <div>{renderHotelCards()}</div>;
};

export default CreatedHotelList;
//   componentDidMount() {
//     axios
//       .get("http://localhost:8081/api/hotel/created",{headers: {
//         Authorization: `Bearer ${user.token}`,
//       }})
//       .then((res) => this.setState({ hotels: res.data }))
//       .catch((err) => console.log(err));
//   }

//   componentDidUpdate() {
//     axios
//       .get("http://localhost:8081/api/hotel/created")
//       .then((res) => this.setState({ hotels: res.data }))
//       .catch((err) => console.log(err));
//   }
