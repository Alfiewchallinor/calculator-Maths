import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Main modules
import Home from "./Home";
import MechnaicsHomePage from "./Mechanics/MechanicsHomePage";
import StatisticsHomePage from "./Statistics/StatisticsHomePage";

//Statistics modules

//Binomial
import BinomialPD from "./Statistics/Binomials/BinomialPD";

// Mechanics modules

//Newtons second law
import NewtonsSecondLaw from "./Mechanics/NewtonsSecondLaw";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/mechanics" element={<MechnaicsHomePage />} />
        <Route path="/statistics" element={<StatisticsHomePage />} />

        {/* Statistics */}
        <Route path="/statistics/binomialPD" element={<BinomialPD />} />

        {/*Mechanics */}
        <Route path="/NewtonsSecondLaw" element={<NewtonsSecondLaw />} />
      </Routes>
    </Router>
  );
};

export default App;
