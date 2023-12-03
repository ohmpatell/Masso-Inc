// HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <div className="home-section">
        <div className="navbar-container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Hotel Booking</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Best Offers</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                </ul>
                </div>
            </div>
            </nav>
        </div>

        <div className="hero-section">
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                    <h1>Hotel Booking</h1>
                    <p>Your perfect stay is just a click away!</p>
                    <input type="text" className="form-control" placeholder="Search for hotels" />
                </div>
                </div>
            </div>
        </div>
        
    </div>
  );
};

export default HeroSection;
