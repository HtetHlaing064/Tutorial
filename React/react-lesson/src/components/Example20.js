"use client";

export default function SimpleList() {
  const fruits = ["Apple", "Banana", "Orange"];
  return (
    <ul>
      {fruits.map((fruit, index) => {
        return <li key={index}>{fruit}</li>;
      })}
    </ul>
  );
}
