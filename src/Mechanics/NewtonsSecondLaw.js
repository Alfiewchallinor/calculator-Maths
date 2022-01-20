import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NewtonsSecondLaw extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.changeUserInput = this.changeUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeUserInput(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {}

  render() {
    return (
      <div style={{ margin: 40 }}>
        <Link to="/mechanics">
          <button
            className="mechanicsCategoryButtons"
            id="mechanicsGoBackButton"
          >
            <p>Go back</p>
          </button>
        </Link>

        <label>
          Force
          <input type="number" name="force" />
        </label>

        <label>
          Mass
          <input type="number" name="mass" />
        </label>

        <label>
          Acceleration
          <input type="number" name="acceleration" />
        </label>
      </div>
    );
  }
}
