import React, { useState, useEffect } from "react";
import axios from "axios";

function BookingScreen({ match }) {
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  // const [room, setRoom] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const data = (await axios.post("http://localhost:8081/api/hotel/", { roomid: match.params.roomid })).data;
  //       setRoom(data);
  //       setLoading(false);
  //     } catch (error) {
  //       setLoading(false);
  //       setError(true);
  //     }
  //   };

  //   fetchData(); // Call the async function inside useEffect

  // }, [match.params.roomid]); // Add match.params.roomid as a dependency if needed

  return (
    <div className="m-5">
      {/* {loading ? <h1>Loading...</h1> : error ? <h1>Error...</h1> : ( */}
        <div>
        <div className="row justify-content-center mt-5">  {/*  yaha vayena vane css banuane ani name matra add garne   */}
            <div className="col-md-6">
              {/* <h1>{room.name}</h1> */}
             {/* <img src = {room.imgeurls[0]} className="bigimg"/> */}
            </div>
            <div className="col-md-6">
                <div> {/* yaha style{{textalign: 'right'}} yo use garne ho  */}
                <h1>
                    Booking Details
                </h1>
                {/* Yaha add garne booking name haru  */}
                <hr></hr>
                <b>
                <p>
                    Name:  
                </p>
                {/* Hotel ko name rakhne  */}
                <p>From Date: </p>
                <p>To Date: </p>
                <p>Room Count: </p>  {/*room count bata halne yaha  */}
                </b>

                {/* <div >
                    <b>
                    <h1>Amount</h1>
                    <hr/>

                    {/* <p>Total Days: </p>
                    <p> Rent per day: </p>   Room bata line 
                    <p>Total Amount: </p>
                    </b>
                </div> */}

             
                </div>
                </div>               
          </div>
        </div>
      {/* )} */}
    </div>
  );
}

export default BookingScreen;
