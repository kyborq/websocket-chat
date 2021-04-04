import React from "react";

import "./Logo.css";

export function Logo({ text, room }) {
  return (
    <div className="app-logo">
      <h1 className="logo-text">{text}</h1>
      {room && <span className="logo-address">{room}</span>}
    </div>
  );
}
