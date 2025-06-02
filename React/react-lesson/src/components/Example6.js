"use client";

import React, { useState } from "react";

export default function Person() {
  const [name, setName] = useState();
  const [email, setEmail] = useState("mkm@gmail.com");
  const [phoneNo, setPhoneNo] = useState("0978653421");

  const onChangeEmail = (changeEmail) => {
    setEmail(changeEmail);
  };

  const onChangePhoneNo = (event) => {
    setPhoneNo(event.target.value);
  };

  const onClickButton = () => {
    alert("Button 1 clicked!");
  };
  const onClickButton2 = () => {
    alert("Button 2 clicked!");
  };

  return (
    <div>
      <h1>Event in function component</h1>
      <input
        value={name}
        placeholder="Enter Name"
        onChange={(event) => setName(event.target.value)}
      />

      <input
        value={email}
        placeholder="Enter Email"
        onChange={(event) => onChangeEmail(event.target.value)}
      />

      <input
        value={phoneNo}
        placeholder="Enter PhoneNo"
        onChange={onChangePhoneNo}
      />

      <button onClick={onClickButton}>Button 1</button>
      <button onClick={() => onClickButton2()}>Button 2</button>
    </div>
  );
}
