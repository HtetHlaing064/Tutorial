"use client";

export default function StatusMessage({ status }) {
  switch (status) {
    case "success":
      return <h1>Operation Suuccessful!</h1>;
    case "error":
      return <h1>Operation Went Wrong!</h1>;

    default:
      return <h1>Waiting for action.....</h1>;
  }
}
