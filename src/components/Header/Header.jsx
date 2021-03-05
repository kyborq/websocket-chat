import React from "react";

import { Logo } from "../Logo/Logo";

import "./Header.css";

export function Header({ text }) {
  return (
    <div className="app-header">
      <Logo text="chatter" />
    </div>
  );
}
