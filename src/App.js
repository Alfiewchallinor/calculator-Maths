import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Self created modules
import Home from "./Home";
import MechnaicsHomePage from "./Mechanics/MechnaicsHomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/mechanics" element={<MechnaicsHomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
