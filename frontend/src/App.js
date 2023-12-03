import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddHotel from "./components/addhotel.component";
import HotelLists from "./components/hotellists.component";
import LandingPage from "./components/landingpage.component";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/hotel/add" Component={AddHotel} />
        <Route path="/hotel" Component={HotelLists} />
      </Routes>
    </Router>
  );
}

export default App;
