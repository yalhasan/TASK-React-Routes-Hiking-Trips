import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import TripsList from "./components/TripsList";
import TripDetail from "./components/TripDetail";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import TripItem from "./components/TripItem";

function App() {
  return (
    <div id="page-top">
      <Nav />
      <Routes>
        <Route path="/Home" Component={Home} />
        <Route path="/TripsList" Component={TripsList} />
        <Route path="/Details/:slug" Component={TripDetail} />
        <Route path="/SearchBar" Component={SearchBar} />
        <Route path="/TripItem" Component={TripItem} />
      </Routes>
    </div>
  );
}

export default App;
