"use client";

export default function Notification({ hasMessage }) {
  return (
    <div>
      <h1>Dashbook</h1>
      {hasMessage && <p>You have new Message</p>}
    </div>
  );
}
