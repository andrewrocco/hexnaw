import React from 'react';
import Link from 'next/link';

export const Header = () => (
  <div>
    <Link href="/">Hex Naw</Link>
    <Link href="/about" prefetch>About</Link>
    <Link href="https://thescenery.co" prefetch>The Scenery</Link>
  </div>
);
