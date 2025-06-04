"use client";

export default function Greeting({ isLOggedIn }) {
  return isLOggedIn ? <h1>Welcome back!</h1> : <h1>Please Log in.</h1>;
}
