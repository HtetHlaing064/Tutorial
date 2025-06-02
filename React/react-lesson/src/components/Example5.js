"use client";

import React, { useState } from "react";

export default class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mg Kyaw Min",
      email: "mkm@gmail.com",
      phoneNo: "0978563412",
    };
    this.onChangePhoneNo = this.onChangePhoneNo.bind(this);
  }

  onChangeEmail(onChangeEmail) {
    this.setState({ email: onChangeEmail });
  }

  onChangePhoneNo(event) {
    this.setState({ phoneNo: event.target.value });
  }

  onClickButton() {
    alert("Button 1 clicker");
  }

  onClickButton2() {
    alert("Button 2 clicked!");
  }
  render() {
    return (
      <div>
        <h1>Event in class Component</h1>
        <input
          value={this.state.name}
          placeholder="Enter Name"
          onChange={(event) => this.setState({ name: event.target.value })}
        />

        <input
          value={this.state.email}
          placedolder="Enter Email"
          onChange={(event) => this.onChangeEmail(event.target.value)}
        />

        <input
          value={this.state.phoneNo}
          placedolder="Enter Phone Number"
          onChange={this.onChangePhoneNo}
        />
        <button onClick={this.onClickButton}>Button 1</button>
        <button onClick={() => this.onClickButton2()}>BUtton 2</button>
      </div>
    );
  }
}
