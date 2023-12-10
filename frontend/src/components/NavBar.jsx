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
        <Link className="navbar-brand" to="/">
          <img
            src="logo.png"
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
              <a className="nav-link" href="@" activeClassName="active">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="2" activeClassName="active">
                Best Offers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="@" activeClassName="active">
                Contact
              </a>
            </li>
            {user && (
              <li className="nav-item">
                <Link className="nav-link" to="/hotel/add" activeClassName="active">
                  Add Hotel
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/hotel" activeClassName="active">
                Hotel List
              </Link>
            </li>
            {user ? (
              <div className="nav-item">
                <span className="nav-link">{user.email}</span>
                <button onClick={handleClick} className="btn btn-warning">
                  Log out
                </button>
              </div>
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
