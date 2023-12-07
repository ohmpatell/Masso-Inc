import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
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
        {user && (
        <li class="nav-item active">
          <Link class="nav-link" to="/hotel/add">
            Add Hotel
          </Link>
        </li>
        )}
        <li class="nav-item active">
          <Link class="nav-link" to="/hotel">
            Hotel List
          </Link>
        </li>
      </ul>
      {user && (
        <div>
          <span>{user.email}</span>
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
