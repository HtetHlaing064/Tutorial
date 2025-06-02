"use client";
import React, { useState } from "react";

export default function Drive() {
  const [brand, setBrand] = useState("Toyota");
  const [year, setYear] = useState(2025);
  return (
    <div>
      <h2>This is latest car brand model</h2>
      <div>{brand}</div>
      <div>{year.toString()}</div>
    </div>
  );
}
