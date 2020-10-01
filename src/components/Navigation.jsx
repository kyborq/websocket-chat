import React from 'react';

import { NavButton } from './NavButton';

export function Navigation() {
  return (
    <div>
      <NavButton link="/" label="Home" />
      <NavButton link="/about" label="About" />
    </div>
  );
}
