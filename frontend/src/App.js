import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import AddHotel from "./components/addhotel.component";
import HotelLists from "./components/hotellists.component";
import LandingPage from "./components/landingpage.component";
import EditHotel from "./components/edithotel";
import Login from "./components/login.component";
import Registration from "./components/registration.component";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/hotel/add" Component={AddHotel} />
        <Route path="/hotel" Component={HotelLists} />
        <Route path="/edit/:id" element={<EditHotel />} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Registration} />
      </Routes>
    </Router>
  );
}

export default App;
