import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class StatisticsHomePage extends Component {
  render() {
    return (
      <div style={{ margin: 40 }}>
        <Link to="/">
          <button
            className="statisticsCategoryButtons"
            id="StatisticsGoBackButton"
          >
            <p className="fontForStatisticsButtons">Go back</p>
          </button>
        </Link>

        {/* Link to binomailPD page */}
        <Link to="/statistics/binomialPD">
          <button
            className="statisticsCategoryButtons"
            id="StatisticsBinomialPD"
          >
            <p className="fontForStatisticsButtons">Binomial PD</p>
          </button>
        </Link>
      </div>
    );
  }
}
