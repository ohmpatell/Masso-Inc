import React from "react";
//import { Link } from "react-router-dom";
//import Login from "./login.component";
import Hero from "./LandingPage/Hero";
import BestOffers from "./LandingPage/BestOffers";
import FAQ from "./LandingPage/faq";

const LandingPage = () => {
  //const [showFindHotel, setShowFindHotel] = useState(true);

  /*const handleLoginToggle = (isFormVisible) => {
    setShowFindHotel(!isFormVisible);
  };*/

  return (
    <div>
      <div id="hero" style={{maxHeight:"100vh"}}>
        <Hero/>
      </div>
      
      <div id="best-offers" style={{maxHeight:"100vh"}}>
        <BestOffers/>
      </div>

      <div id="faq" style={{height:"100vh"}}>
        <FAQ/>
      </div>

    </div>
  );
};

export default LandingPage;



/*<div>
      <h1>Welcome to the Hotel Bookings Web Application</h1>
      <p>Discover the best places where to go!</p>
      {/* 
      <img src="url_immagine_hotel" alt="Immagine Hotel" />
      <br />
      *//*
      <Login onLoginToggle={handleLoginToggle} />
      {showFindHotel && (
        <Link to="/hotel" className="btn btn-primary">
          Find Hotel
        </Link>
      )}
    </div>*/