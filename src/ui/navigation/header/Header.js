import React from 'react';

import { HeaderLink } from '../header_link/HeaderLink';

export const Header = () => (
  <div>
    <HeaderLink href="/">Hex Naw</HeaderLink>
    <HeaderLink href="/about" prefetch>About</HeaderLink>
    <HeaderLink href="https://thescenery.co" prefetch>The Scenery</HeaderLink>
  </div>
);
