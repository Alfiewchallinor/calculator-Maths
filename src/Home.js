import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        hello
        <Link className="homePageButton" id="statsButton" to="/statistics">
          Statistics
        </Link>
        <Link className="homePageButton" id="mechanicsButton" to="/mechanics">
          Mechanics
        </Link>
      </div>
    );
  }
}
