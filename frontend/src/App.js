import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import AddHotel from "./components/addhotel.component";
import HotelLists from "./components/hotellists.component";
import LandingPage from "./components/landingpage.component";
import EditHotel from "./components/edithotel";
import Login from "./components/login.component";
import Registration from "./components/registration.component";
import { useAuthContext } from "../src/hooks/useAuthContext";
import CreatedHotelList from "./components/createdHotelList.component";
import BookingScreen from "./components/Bookingscreen";
import Reservation from "./components/reservation.component";
import Footer from "./components/footer";
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  const { user } = useAuthContext();

  return (
    <Router>
      <NavBar/>
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
          path="/bookingscreen"
          element={user ? <BookingScreen /> : <Navigate to="/login" />}
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
    <Footer />

    </Router>
  );
}

export default App;