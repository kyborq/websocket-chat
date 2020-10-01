import React from 'react';
import { NavLink } from 'react-router-dom';

export function NavButton({ link, label }) {
  return (
    <NavLink exact to={link} className="nav-button" activeClassName="active">
      <span className="button-label">{label}</span>
    </NavLink>
  );
}
