"use client";

function LoggedInView() {
  return <h1>Welcome Back!</h1>;
}

function LoggedOutView() {
  return <h1>Please log in</h1>;
}
export default function Greeting({ isLoggedIn }) {
  return isLoggedIn ? <LoggedInView /> : <LoggedOutView />;
}
