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
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img
          src=".\logo.png"
          alt="Logo"
          style={{ width: "80px", marginLeft: "10px" }}
        />
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        {user && isUserHotelOwner() && (
          <div>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/hotel/add">
                  Add Hotel
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/hotel/created">
                  My Hotels
                </Link>
              </li>
            </ul>
          </div>
        )}
        {user && isUserCustomer() && (
          <div>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/hotel">
                  Hotels
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/hotel/created">
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
