"use client";

import React from "react";

export default class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Toyota",
      year: 2021,
    };
  }

  render() {
    return (
      <div>
        <h2>This is car brand and year</h2>
        <div>{this.state.brand}</div>
        <div>{this.state.year.toString()}</div>
      </div>
    );
  }
}
