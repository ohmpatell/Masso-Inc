import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  const isUserCustomer = () => {
    return user && user.accountType != null && user.accountType === "Customer";
  };

  const isUserHotelOwner = () => {
    return (
      user && user.accountType != null && user.accountType === "HotelOwner"
    );
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img
          src=".\logo.png"
          alt="Logo"
          style={{ width: "80px", marginLeft: "10px" }}
        />
      </Link>
      <ul class="navbar-nav">
        <li class="nav-item active">
          <Link class="nav-link" to="/">
            Home
          </Link>
        </li>
        {user && isUserHotelOwner() && (
          <div>
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link class="nav-link" to="/hotel/add">
                  Add Hotel
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/hotel/created">
                  My Hotels
                </Link>
              </li>
            </ul>
          </div>
        )}
        {user && isUserCustomer() && (
          <div>
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link class="nav-link" to="/hotel">
                  Hotels
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/bookingscreen">
                  My Bookings
                </Link>
              </li>
            </ul>
          </div>
        )}
      </ul>
      {user && (
        <div>
          <span>
            Hello, {user.firstName} {user.lastName}
          </span>
          <button onClick={handleClick}>Log out</button>
        </div>
      )}
      {!user && (
        <div>
          <Link to="/login">Login </Link>
          <Link to="/signup">Signup </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
