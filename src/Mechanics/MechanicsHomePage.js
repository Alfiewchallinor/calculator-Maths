import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MechanicsHomePage extends Component {
  render() {
    return (
      <div style={{ margin: 40 }}>
        <Link to="/">
          <button
            className="mechanicsCategoryButtons"
            id="mechanicsGoBackButton"
          >
            <p>Go back</p>
          </button>
        </Link>

        <Link to="/NewtonsSecondLaw">
          <button
            className="mechanicsCategoryButtons"
            id="NewtonsSecondLawButton"
          >
            <p>Newton's Second Law</p>
          </button>
        </Link>
      </div>
    );
  }
}
