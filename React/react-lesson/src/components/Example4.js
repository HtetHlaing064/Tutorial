"use client";

import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("Mg Kyaw Min");
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <h1>State in function component</h1>
      <div>{name}</div>
      <div>{date.toString()}</div>
    </div>
  );
}
