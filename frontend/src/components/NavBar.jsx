import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage/Hero.css";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { scroller } from "react-scroll";

const NavBar = () => {
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  const isUserHotelOwner = () => {
    return user && user.accountType != null && user.accountType === "HotelOwner";
  };

  return (
    <div className="navbar-container" style={{ height: "10vh" }}>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ height: "100%" }}
      >
        <Link className="navbar-brand" to="/">
          <img
            // src="logo.png"
            src="masso-inc-favicon-black.svg"
            width="100"
            height="70"
            className="d-inline-block align-top"
            alt=""
            loading="lazy"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" activeClassName="active">
                Home
              </Link>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" onClick={() => scrollToSection("best-offers")} activeClassName="active" style={{cursor:"pointer"}}>
                Best Offers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link"onClick={() => scrollToSection("faq")}  activeClassName="active" style={{cursor:"pointer"}}>
                FAQ
              </a>
            </li>
            {user && isUserHotelOwner() && (
              <div>
              <li className="nav-item">
                <Link className="nav-link" to="/hotel/add" activeClassName="active">
                  Add Hotel
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hotel/created" activeClassName="active">
                  My Hotels
                </Link>
              </li>
              </div>
            )}
            {!user || (user && !isUserHotelOwner()) && (
              <div>
                <li className="nav-item">
              <Link className="nav-link" to="/hotel" activeClassName="active">
                Hotel List
              </Link>
            </li>
              </div>
              )}            
            {user && !isUserHotelOwner() && (              
              <li className="nav-item">
                <Link className="nav-link" to="/myBookings" activeClassName="active">
                  My Bookings
                </Link>
              </li>                            
            )}
            {user ? (
              <>
              <div className="nav-item">
                <span className="nav-link text-dark">Hi, {user.firstName}</span>
                </div>
                <button onClick={handleClick} className="btn btn-warning nav-item">
                  Log out
                </button>
              </>
            ) : (
              <button className="nav-item">
                <Link to="/login" className="nav-link" activeClassName="active">
                  SignIn
                </Link>
              </button>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
