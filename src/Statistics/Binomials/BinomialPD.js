import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class BinomialPD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfTrials: "",
      propabilityOfSuccess: "",
      numberOfSuccesses: "",

      displayedAnswer: "",
    };
    this.valuesSubmitted = this.valuesSubmitted.bind(this);
    this.convertToFactorial = this.convertToFactorial.bind(this);
  }

  valuesSubmitted(event) {
    event.preventDefault();
    //Get the values submitted by user

    const numberOfTrials = this.state.numberOfTrials;
    const propabilityOfSuccess = this.state.propabilityOfSuccess;
    const numberOfSuccesses = this.state.numberOfSuccesses;

    var factorialedN = this.convertToFactorial(numberOfTrials);
    var factorialedNOS = this.convertToFactorial(numberOfSuccesses);
    var factorialedNminusNOS = this.convertToFactorial(
      numberOfTrials - numberOfSuccesses
    );

    const answerToDisplayToUser =
      (factorialedN / (factorialedNOS * factorialedNminusNOS)) *
      (Math.pow(propabilityOfSuccess, numberOfSuccesses) *
        Math.pow(1 - propabilityOfSuccess, numberOfTrials - numberOfSuccesses));

    this.setState({
      displayedAnswer: answerToDisplayToUser,
    });
  }

  convertToFactorial(n) {
    var res = 1;
    for (var i = 2; i <= n; i++) res = res * i;
    return res;
  }

  render() {
    return (
      <div style={{ margin: 40 }}>
        {/* button to go back to statistics page */}
        <Link to="/statistics">
          <button
            className="statisticsCategoryButtons"
            id="StatisticsGoBackButton"
          >
            <p className="fontForStatisticsButtons">Go back</p>
          </button>
        </Link>
        <div style={{ position: "absolute", backgroundColor: "transparent" }}>
          <p className="textNextToStatisticsInput">
            Number of trials (<span style={{ fontWeight: "700" }}>n</span>)
          </p>
          <form onSubmit={this.valuesSubmitted}>
            <input
              className="StatisticsDefaultInput"
              id="NoOfTrialsInput"
              type="number"
              value={this.state.numberOfTrials}
              onChange={(input) => {
                this.setState({
                  numberOfTrials: input.target.value,
                });
              }}
            />

            <p className="textNextToStatisticsInput">
              Probability of success (
              <span style={{ fontWeight: "700" }}>p</span>)
            </p>
            <input
              className="StatisticsDefaultInput"
              id="ProbOfSucInput"
              type="number"
              value={this.state.propabilityOfSuccess}
              onChange={(input) => {
                this.setState({
                  propabilityOfSuccess: input.target.value,
                });
              }}
            />

            <p className="textNextToStatisticsInput">
              Amount of successes (<span style={{ fontWeight: "700" }}>X</span>)
            </p>
            <input
              className="StatisticsDefaultInput"
              id="NoOfSucs"
              type="number"
              value={this.state.numberOfSuccesses}
              onChange={(input) => {
                this.setState({
                  numberOfSuccesses: input.target.value,
                });
              }}
            />

            <button
              className="statisticsCategoryButtons"
              type="submit"
              id="enterButtonForStatistics"
            >
              ENTER
            </button>
          </form>

          <p className="textNextToStatisticsInput" style={{ marginTop: 100 }}>
            The probability is:
            <span style={{ fontWeight: "700" }}>
              {this.state.displayedAnswer}
            </span>
          </p>
        </div>
      </div>
    );
  }
}
