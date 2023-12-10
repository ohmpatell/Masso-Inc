import React from "react";
import "./Hero.css";
import "../NavBar"; 

const Hero = () => {
  return (
    <div className="home-section">
      <div className="hero-section">
        <div className="container hero-container">
          <div className="hero-text">
            <h1 className="display-4">Book with Masso</h1>
            <p className="lead">Elevate Your Stay, Experience More</p>
          </div>
          <div className="hero-box">
          <form className="form-inline">
  <div className="input-group">
    <input
      type="text"
      className="form-control"
      placeholder="Search for hotels..."
      aria-label="Search"
      aria-describedby="button-addon2"
    />
    <button
    style={{borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px"}}
      className="btn btn-warning"
      type="button"
      id="button-addon2"
    >
      Search
    </button>
  </div>
</form>

          </div>
        </div>

        <div className="container partners-container mt-3">
          <div className="row align-items-center">
            <div className="col-2">
              <h2 className="mb-0">Partners With</h2>
            </div>
            <div className="col-10 text-center">
              <img
                src="https://1000logos.net/wp-content/uploads/2017/02/Hilton-logo-640x504.png"
                alt="Hilton"
                className="partner-logo"
              />
              <img
                src="https://1000logos.net/wp-content/uploads/2022/12/Marriott-logo-768x432.png"
                alt="Marriott"
                className="partner-logo"
              />
              <img
                src="https://1000logos.net/wp-content/uploads/2020/10/Four-Seasons-Logo-768x432.png"
                alt="Four Seasons"
                className="partner-logo"
              />
              <img
                src="https://1000logos.net/wp-content/uploads/2019/11/Hyatt-Logo-768x432.png"
                alt="Hyatt"
                className="partner-logo"
              />
              <img
                src="https://1000logos.net/wp-content/uploads/2021/04/Ritz-Carlton-logo-768x432.png"
                alt="Ritz Carlton"
                className="partner-logo"
              />
              <img
                src="https://1000logos.net/wp-content/uploads/2021/04/InterContinental-logo-768x432.png"
                alt="InterContinental"
                className="partner-logo"
              />
              <img
                src="https://1000logos.net/wp-content/uploads/2021/04/Accor-logo-768x432.png"
                alt="Accor"
                className="partner-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
