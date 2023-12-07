import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import AddHotel from "./components/addhotel.component";
import HotelLists from "./components/hotellists.component";
import LandingPage from "./components/landingpage.component";
import EditHotel from "./components/edithotel";
import Login from "./components/login.component";
import Registration from "./components/registration.component";
import { useAuthContext } from "../src/hooks/useAuthContext";
import CreatedHotelList from "./components/createdHotelList.component";
import Reservation from "./components/reservation.component";

function App() {
  const { user } = useAuthContext();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/hotel/add"
          element={user ? <AddHotel /> : <Navigate to="/login" />}
        />
        <Route path="/hotel" element={<HotelLists />} />
        <Route
          path="/hotel/created"
          element={user ? <CreatedHotelList /> : <Navigate to="/login" />}
        />
        <Route
          path="/hotel/update/:id"
          element={user ? <EditHotel /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!user ? <Registration /> : <Navigate to="/" />}
        />
        <Route
          path="/reservation/:hotelId"
          element={user ? <Reservation /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
