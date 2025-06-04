"use client";

import { use } from "react";

export default function UserList() {
  const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 22 },
    { id: 3, name: "Charlies", age: 30 },
  ];

  return (
    <ul>
      {users.map((user, index) => (
        <li key={use.id}>
          {user.name}-{user.age} years old
        </li>
      ))}
    </ul>
  );
}
