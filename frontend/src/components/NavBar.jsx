import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage/Hero.css";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const NavBar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };
  return (
    <div className="navbar-container" style={{ height: "10vh" }}>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ height: "100%" }}
      >
        <a className="navbar-brand" href="@">
          <img
            src="logo.png"
            width="100"
            height="70"
            className="d-inline-block align-top"
            alt=""
            loading="lazy"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link class="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="@">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="@">
                Best Offers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="@">
                Contact
              </a>
            </li>
            {user && (
              <li class="nav-item">
                <Link class="nav-link" to="/hotel/add">
                  Add Hotel
                </Link>
              </li>
            )}
            <li className="nav-item active">
              <Link className="nav-link" to="/hotel">
                Hotel List
              </Link>
            </li>
            {user && (
              <div>
                <span>{user.email}</span>
                <button onClick={handleClick} className="btn btn-warning">Log out</button>
              </div>
            )}
            {!user && (
              <div>
                <button className="btn btn-warning nav-item">
                <Link to="/login" className="nav-link">Login </Link>
                </button>
                <button className="btn btn-warning nav-item">
                <Link to="/signup" className="nav-link">SignUp </Link>
                </button>                
              </div>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
