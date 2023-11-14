import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddHotel from "./components/addhotel.component";
import HotelLists from "./components/hotellists.component";
import LandingPage from "./components/landingpage.component";

function App() {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">
          MASSO_INC
        </Link>
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link" to="/hotel/add">
              Add Hotel
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/hotel">
              Hotel List
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/hotel/add" Component={AddHotel} />
        <Route path="/hotel" Component={HotelLists} />
      </Routes>
    </Router>
  );
}

export default App;
